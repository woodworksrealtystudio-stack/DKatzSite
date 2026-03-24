"""
Clean White Carousel Generator v4
Style:  Instagram carousel -- @nateherk-inspired minimal white
Canvas: 1080 x 1080 px (1:1 square)
Font:   Gill Sans (softer, humanist -- UltraBold headlines, Regular body)

Layout:
  Slide 1  -- headline only + blue line + profile bar flowing below it
  Content  -- profile bar top, text block vertically centered in remaining space
  CTA      -- centered photo, name, follow headline, bio, pill button
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

# ── Paths ─────────────────────────────────────────────────────────────────────
HEADSHOT_PATH = Path("/Users/elibock/Desktop/ExecAss/brand-assets/headshot.png")
OUTPUT_DIR    = Path("/Users/elibock/Desktop/ExecAss/projects/own-content/carousels/carousel-004")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# ── Brand ─────────────────────────────────────────────────────────────────────
NAME   = "Eli Bock"
HANDLE = "@woodworksrealtystudio"

# ── Canvas ────────────────────────────────────────────────────────────────────
W, H   = 1080, 1080
MARGIN = 108
TEXT_W = W - 2 * MARGIN   # 864 px

# ── Colors ────────────────────────────────────────────────────────────────────
WHITE     = (255, 255, 255)
BLACK     = (15,  15,  15)
GRAY_BODY = (65,  65,  65)
GRAY_META = (155, 155, 155)
BLUE_IG   = (0,   149, 246)
BLUE_LINE = (70,  120, 220)

# ── Fonts (Inter) ─────────────────────────────────────────────────────────────
BASE = Path("/Users/elibock/Desktop/ExecAss/brand-assets/fonts")
F_EXTRABOLD = str(BASE / "Inter-ExtraBold.ttf")
F_BOLD      = str(BASE / "Inter-Bold.ttf")
F_REG       = str(BASE / "Inter-Regular.ttf")

def f(face, size):
    paths = {'ultra': F_EXTRABOLD, 'bold': F_BOLD, 'semi': F_BOLD, 'reg': F_REG}
    return ImageFont.truetype(paths[face], size)

# ── Text helpers ──────────────────────────────────────────────────────────────

def measure(font, text):
    bb = font.getbbox(text)
    return bb[2] - bb[0], bb[3] - bb[1]

def wrap_pixels(text, font, max_width):
    words, lines, current = text.split(), [], []
    for word in words:
        trial = " ".join(current + [word])
        w, _ = measure(font, trial)
        if w <= max_width or not current:
            current.append(word)
        else:
            lines.append(" ".join(current))
            current = [word]
    if current:
        lines.append(" ".join(current))
    return lines

def auto_headline(text, start_size, min_size, max_w, max_h):
    size = start_size
    while size >= min_size:
        fnt   = f('ultra', size)
        lines = wrap_pixels(text, fnt, max_w)
        lh    = round(size * 1.15)
        if len(lines) * lh <= max_h:
            return fnt, lines, lh
        size -= 4
    fnt   = f('ultra', min_size)
    lines = wrap_pixels(text, fnt, max_w)
    lh    = round(min_size * 1.15)
    return fnt, lines, lh

def draw_lines(draw, lines, x, y, font, color, lh):
    for line in lines:
        draw.text((x, y), line, font=font, fill=color)
        y += lh
    return y

def measure_body_height(text, max_w):
    """Pre-measure body block height for vertical centering."""
    fnt  = f('reg', 36)
    lh   = round(36 * 1.55)
    total = 0
    for para in text.split("\n"):
        if para.strip() == "":
            total += round(lh * 0.6)
        else:
            lines  = wrap_pixels(para, fnt, max_w)
            total += len(lines) * lh + round(lh * 0.25)
    return total

def draw_body(draw, text, x, y, max_w, max_bottom):
    fnt = f('reg', 36)
    lh  = round(36 * 1.55)
    for para in text.split("\n"):
        if para.strip() == "":
            y += round(lh * 0.6)
            continue
        lines = wrap_pixels(para, fnt, max_w)
        for line in lines:
            if y + lh > max_bottom:
                return y
            draw.text((x, y), line, font=fnt, fill=GRAY_BODY)
            y += lh
        y += round(lh * 0.25)
    return y

# ── Image utilities ───────────────────────────────────────────────────────────

def circle_crop(img, size):
    img  = img.convert("RGBA").resize((size, size), Image.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size, size), fill=255)
    out  = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(img, mask=mask)
    return out

def draw_badge(draw, cx, cy, r=10):
    draw.ellipse((cx-r, cy-r, cx+r, cy+r), fill=BLUE_IG)
    lw = max(2, round(r * 0.35))
    p1 = (cx - r*0.42, cy + r*0.02)
    p2 = (cx - r*0.08, cy + r*0.38)
    p3 = (cx + r*0.48, cy - r*0.28)
    draw.line([p1, p2], fill=WHITE, width=lw)
    draw.line([p2, p3], fill=WHITE, width=lw)

# ── Precompute headshot assets ────────────────────────────────────────────────
_raw     = Image.open(HEADSHOT_PATH)
PHOTO_SM = circle_crop(_raw, 60)    # bumped from 48 → 60
PHOTO_LG = circle_crop(_raw, 160)

# ── Slide sub-components ──────────────────────────────────────────────────────

def add_profile_bar(img, y_top=50):
    """Profile bar: photo + name + badge + handle. Returns y below bar."""
    draw = ImageDraw.Draw(img)
    ph   = PHOTO_SM.size[0]   # 48
    x0   = MARGIN
    img.paste(PHOTO_SM, (x0, y_top), PHOTO_SM)

    name_fnt = f('bold', 28)
    hndl_fnt = f('reg',  22)

    name_bb  = name_fnt.getbbox(NAME)
    name_w   = name_bb[2] - name_bb[0]
    name_h   = name_bb[3] - name_bb[1]
    name_asc = name_bb[1]   # ascender offset for precise badge centering

    hndl_bb  = hndl_fnt.getbbox(HANDLE)
    hndl_h   = hndl_bb[3] - hndl_bb[1]

    text_x  = x0 + ph + 14
    block_h = name_h + 5 + hndl_h
    text_y  = y_top + (ph - block_h) // 2

    draw.text((text_x, text_y), NAME, font=name_fnt, fill=BLACK)

    # Badge aligned to visual center of name text (not bounding box top)
    badge_r  = 9
    badge_cx = text_x + name_w + badge_r + 10
    badge_cy = text_y + name_asc + name_h // 2
    draw_badge(draw, badge_cx, badge_cy, r=badge_r)

    draw.text((text_x, text_y + name_h + 5), HANDLE, font=hndl_fnt, fill=GRAY_META)

    return y_top + ph + 16

def add_counter(draw, n, total):
    fnt  = f('reg', 24)
    text = f"{n} / {total}"
    tw, _ = measure(fnt, text)
    draw.text((W - MARGIN - tw, 58), text, font=fnt, fill=GRAY_META)

BOTTOM_Y = H - 44   # shared Y for watermark and swipe -- keeps them aligned

def add_watermark(draw):
    fnt = f('reg', 20)
    draw.text((MARGIN, BOTTOM_Y), HANDLE, font=fnt, fill=(210, 210, 210))

# ── Slide builders ────────────────────────────────────────────────────────────

def build_title_slide(slide, total):
    img  = Image.new("RGB", (W, H), WHITE)
    draw = ImageDraw.Draw(img)

    add_counter(draw, 1, total)

    # Headline -- limit to 3 lines max by capping max_h
    hl_y_start = 260
    lh_est     = round(80 * 1.15)         # estimate for 3-line cap
    fnt, lines, lh = auto_headline(
        slide["headline"], start_size=80, min_size=52,
        max_w=TEXT_W, max_h=lh_est * 3    # force at most 3 lines
    )
    hl_y_end = draw_lines(draw, lines, MARGIN, hl_y_start, fnt, BLACK, lh)

    # Blue accent line immediately below headline
    line_y = hl_y_end + 22
    draw.rectangle([(MARGIN, line_y), (MARGIN + 76, line_y + 6)], fill=BLUE_LINE)

    # Profile bar flows right below the line
    add_profile_bar(img, y_top=line_y + 28)

    # "Swipe >" bottom right in blue (drawn as text + manual arrowhead)
    sw_fnt  = f('reg', 22)
    sw_txt  = "Swipe"
    sw_w, sw_h = measure(sw_fnt, sw_txt)
    sw_x    = W - MARGIN - sw_w - 28   # 28px for arrow
    sw_y    = BOTTOM_Y
    draw.text((sw_x, sw_y), sw_txt, font=sw_fnt, fill=BLUE_LINE)
    # Draw arrow manually (body + head)
    ax = sw_x + sw_w + 8
    ay = sw_y + sw_h // 2
    draw.line([(ax, ay), (ax + 16, ay)], fill=BLUE_LINE, width=2)
    draw.line([(ax + 8, ay - 6), (ax + 16, ay)], fill=BLUE_LINE, width=2)
    draw.line([(ax + 8, ay + 6), (ax + 16, ay)], fill=BLUE_LINE, width=2)

    add_watermark(draw)
    return img

def build_content_slide(slide, total):
    img  = Image.new("RGB", (W, H), WHITE)
    draw = ImageDraw.Draw(img)

    profile_bottom = add_profile_bar(img, y_top=50)
    add_counter(draw, slide["number"], total)

    # Usable space for text block
    usable_top    = profile_bottom + 50
    usable_bottom = H - 80
    usable_h      = usable_bottom - usable_top

    # Measure text block upfront so we can center it
    hl_max_h = round(usable_h * 0.52)
    fnt, lines, lh = auto_headline(
        slide["headline"], start_size=88, min_size=50,
        max_w=TEXT_W, max_h=hl_max_h
    )
    hl_height   = len(lines) * lh
    gap         = 28
    body_height = measure_body_height(slide["body"], TEXT_W)
    block_h     = hl_height + gap + body_height

    # Vertically center the block
    block_y  = usable_top + max(0, (usable_h - block_h) // 2)

    hl_y_end = draw_lines(draw, lines, MARGIN, block_y, fnt, BLACK, lh)
    draw_body(draw, slide["body"], MARGIN, hl_y_end + gap, TEXT_W, usable_bottom)

    add_watermark(draw)
    return img

def build_cta_slide(slide, total):
    img  = Image.new("RGB", (W, H), WHITE)
    draw = ImageDraw.Draw(img)
    add_counter(draw, slide["number"], total)

    # Large centered photo
    ph      = PHOTO_LG.size[0]
    photo_x = (W - ph) // 2
    photo_y = 110
    img.paste(PHOTO_LG, (photo_x, photo_y), PHOTO_LG)

    # Name + badge centered
    name_fnt = f('bold', 34)
    name_bb  = name_fnt.getbbox(NAME)
    name_w   = name_bb[2] - name_bb[0]
    name_h   = name_bb[3] - name_bb[1]
    name_asc = name_bb[1]
    badge_r  = 13
    total_row_w = name_w + badge_r * 2 + 16
    name_x   = (W - total_row_w) // 2
    name_y   = photo_y + ph + 24
    draw.text((name_x, name_y), NAME, font=name_fnt, fill=BLACK)
    draw_badge(draw, name_x + name_w + badge_r + 6, name_y + name_asc + name_h // 2, r=badge_r)

    # Handle centered
    hndl_fnt   = f('reg', 26)
    hndl_w, hndl_h = measure(hndl_fnt, HANDLE)
    hndl_y     = name_y + name_h + 10
    draw.text(((W - hndl_w) // 2, hndl_y), HANDLE, font=hndl_fnt, fill=GRAY_META)

    # Follow headline centered
    follow_y = hndl_y + hndl_h + 52
    fnt2, lines2, lh2 = auto_headline(
        slide["headline"], start_size=68, min_size=44,
        max_w=TEXT_W, max_h=160
    )
    for line in lines2:
        lw, _ = measure(fnt2, line)
        draw.text(((W - lw) // 2, follow_y), line, font=fnt2, fill=BLACK)
        follow_y += lh2

    # Bio centered
    bio_fnt = f('reg', 28)
    bio_lh  = round(28 * 1.5)
    bio_y   = follow_y + 24
    for para in slide["bio"].split("\n"):
        for ln in wrap_pixels(para, bio_fnt, TEXT_W):
            lw, _ = measure(bio_fnt, ln)
            draw.text(((W - lw) // 2, bio_y), ln, font=bio_fnt, fill=GRAY_BODY)
            bio_y += bio_lh

    # Black pill button
    btn_text     = f"Follow {HANDLE}"
    btn_fnt      = f('bold', 28)
    btn_w, btn_h = measure(btn_fnt, btn_text)
    pad_x, pad_y = 52, 22
    btn_total_w  = btn_w + pad_x * 2
    btn_total_h  = btn_h + pad_y * 2
    btn_x = (W - btn_total_w) // 2
    btn_y = bio_y + 32
    if btn_y + btn_total_h > H - 40:
        btn_y = H - btn_total_h - 40
    draw.rounded_rectangle(
        [(btn_x, btn_y), (btn_x + btn_total_w, btn_y + btn_total_h)],
        radius=btn_total_h // 2,
        fill=BLACK
    )
    draw.text((btn_x + pad_x, btn_y + pad_y), btn_text, font=btn_fnt, fill=WHITE)

    add_watermark(draw)
    return img

# ── Slide content ─────────────────────────────────────────────────────────────
slides = [
    {
        "number": 1,
        "type":   "title",
        "headline": "Most realtors automate the wrong things first.",
    },
    {
        "number": 2,
        "type":   "content",
        "headline": "Start with lead follow-up, not content.",
        "body":     "Content creation is visible. Follow-up is where deals die.\n\nAn automated follow-up sequence runs while you sleep and never forgets to reply.",
    },
    {
        "number": 3,
        "type":   "content",
        "headline": "Your CRM should update itself.",
        "body":     "Every time you have a call, notes should log automatically. Every time a lead goes cold, it should tag itself.\n\nManual CRM updates are a tax you shouldn't be paying.",
    },
    {
        "number": 4,
        "type":   "content",
        "headline": "Listing prep takes 3 hours. It doesn't have to.",
        "body":     "Market reports, comps, neighborhood summaries -- an AI workflow can draft all of it in minutes.\n\nYou review and send. That's it.",
    },
    {
        "number": 5,
        "type":   "content",
        "headline": "The right order matters.",
        "body":     "Automate follow-up first. Then CRM. Then listing prep.\n\nEach one builds on the last and frees up more time for the work only you can do.",
    },
    {
        "number": 6,
        "type":   "cta",
        "headline": "Follow for more real estate AI that actually works.",
        "bio":      "I help realtors build AI systems\nthat save time and win more clients.",
    },
]

TOTAL = len(slides)

# ── Generate ──────────────────────────────────────────────────────────────────
print(f"Generating {TOTAL} slides...\n")

builders = {
    "title":   build_title_slide,
    "content": build_content_slide,
    "cta":     build_cta_slide,
}

for slide in slides:
    img      = builders[slide["type"]](slide, TOTAL)
    out_path = OUTPUT_DIR / f"slide-{slide['number']}.jpg"
    img.save(out_path, "JPEG", quality=97)
    print(f"  [{slide['number']}/{TOTAL}] {slide['type']:<8}  ->  {out_path.name}")

print(f"\nDone.  {OUTPUT_DIR}")
