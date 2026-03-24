import os
import base64
import io
import textwrap
from pathlib import Path
from openai import OpenAI
from PIL import Image, ImageDraw, ImageFont

# --- Config ---
API_KEY = os.getenv("OPENAI_API_KEY")  # Set via environment variable
OUTPUT_DIR = Path("/Users/elibock/Desktop/ExecAss/projects/own-content/carousels/carousel-001")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

client = OpenAI(api_key=API_KEY)

# --- Slide content ---
slides = [
    {
        "number": 1,
        "tag": "THE STAT",
        "headline": "87% of realtors\nare using AI.",
        "body": "Only 17% are seeing real results.\n\nHere's the gap nobody's\ntalking about.",
    },
    {
        "number": 2,
        "tag": "THE PROBLEM",
        "headline": "Most agents use AI\nto write one email.",
        "body": "Then close the tab.\n\nThat's not automation.\nThat's copy-paste with extra steps.",
    },
    {
        "number": 3,
        "tag": "THE REALITY",
        "headline": "While you're doing that...",
        "body": "Top producers are running:\n\n- Automated content pipelines\n- AI-powered CRM follow-ups\n- Market reports on autopilot\n\nThe gap is widening. Every week.",
    },
    {
        "number": 4,
        "tag": "THE SHIFT",
        "headline": "It's not about\neffort or tech skills.",
        "body": "It's knowing which 3 workflows\nto automate first.\n\nStart there.\nEverything else follows.",
    },
    {
        "number": 5,
        "tag": "THE 3 WORKFLOWS",
        "headline": "What actually moves\nthe needle:",
        "body": "1. Content\n   Stop posting manually. Build a system.\n\n2. Lead follow-up\n   AI CRMs convert 67% more leads.\n\n3. Market reports\n   Generated in seconds, not hours.",
    },
    {
        "number": 6,
        "tag": "THE CTA",
        "headline": "I help realtors\nbuild these systems.",
        "body": "Follow for weekly AI breakdowns\nbuilt for real estate.\n\nDM me 'AI' and let's figure out\nwhere to start.",
    },
]

# --- Background prompt (consistent across all slides) ---
BG_PROMPT = (
    "Cinematic dark background for a social media carousel slide. "
    "Deep navy to near-black gradient. Subtle abstract architectural lines and geometric shapes "
    "in electric blue (#0055FF) with very low opacity. "
    "Minimalist, high-end, modern tech aesthetic with a faint real estate feel -- "
    "think glass skyscrapers, city lights at night. "
    "No text, no people, no logos. 9:16 portrait format. Photorealistic."
)

# --- Fonts ---
FONT_BOLD = "/System/Library/Fonts/HelveticaNeue.ttc"
FONT_REG  = "/System/Library/Fonts/HelveticaNeue.ttc"

W, H = 1024, 1792  # 9:16

def load_font(path, size, index=1):
    try:
        return ImageFont.truetype(path, size, index=index)
    except Exception:
        return ImageFont.load_default()

def draw_text_block(draw, text, x, y, font, color, max_width, line_spacing=1.3):
    lines = text.split("\n")
    current_y = y
    for line in lines:
        draw.text((x, current_y), line, font=font, fill=color)
        bbox = font.getbbox(line)
        line_h = bbox[3] - bbox[1]
        current_y += int(line_h * line_spacing)
    return current_y

def add_text_overlay(img: Image.Image, slide: dict) -> Image.Image:
    img = img.copy().convert("RGBA")
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Semi-transparent dark panel behind text (top 75% of slide)
    panel_h = int(H * 0.80)
    draw.rectangle([(0, 0), (W, panel_h)], fill=(0, 0, 0, 140))

    # Fonts
    tag_font      = load_font(FONT_BOLD, 30, index=1)
    headline_font = load_font(FONT_BOLD, 72, index=1)
    body_font     = load_font(FONT_REG,  38, index=0)
    num_font      = load_font(FONT_BOLD, 28, index=1)

    # Colors
    BLUE   = (0, 120, 255, 255)
    WHITE  = (255, 255, 255, 255)
    GRAY   = (180, 180, 190, 255)

    MARGIN = 70
    top    = 90

    # Slide number indicator (top right)
    num_text = f"{slide['number']} / 6"
    draw.text((W - MARGIN - 80, top), num_text, font=num_font, fill=GRAY)

    # Blue accent line
    draw.rectangle([(MARGIN, top + 10), (MARGIN + 48, top + 14)], fill=BLUE)

    # Tag
    tag_y = top + 44
    draw.text((MARGIN, tag_y), slide["tag"], font=tag_font, fill=BLUE)

    # Headline
    headline_y = tag_y + 56
    headline_end_y = draw_text_block(draw, slide["headline"], MARGIN, headline_y, headline_font, WHITE, W - MARGIN * 2)

    # Divider
    div_y = headline_end_y + 24
    draw.rectangle([(MARGIN, div_y), (MARGIN + 160, div_y + 3)], fill=BLUE)

    # Body
    body_y = div_y + 32
    draw_text_block(draw, slide["body"], MARGIN, body_y, body_font, GRAY, W - MARGIN * 2)

    # Woodworks branding bottom left (inside safe zone)
    brand_y = int(H * 0.77)
    brand_font = load_font(FONT_BOLD, 26, index=1)
    draw.text((MARGIN, brand_y), "woodworks realty studio", font=brand_font, fill=(120, 120, 130, 200))

    img = Image.alpha_composite(img, overlay)
    return img.convert("RGB")

# --- Generate ---
print(f"Generating {len(slides)} carousel slides...\n")

for slide in slides:
    print(f"  Slide {slide['number']}/6 -- {slide['tag']}")

    response = client.images.generate(
        model="dall-e-3",
        prompt=BG_PROMPT,
        size="1024x1792",
        quality="standard",
        n=1,
        response_format="b64_json",
    )

    img_data = base64.b64decode(response.data[0].b64_json)
    bg = Image.open(io.BytesIO(img_data))
    final = add_text_overlay(bg, slide)

    out_path = OUTPUT_DIR / f"slide-{slide['number']}.jpg"
    final.save(out_path, "JPEG", quality=95)
    print(f"    Saved: {out_path}")

print(f"\nDone. Slides saved to:\n{OUTPUT_DIR}")
