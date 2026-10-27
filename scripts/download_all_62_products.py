import os
import sys
import urllib.request
import urllib.parse

products_dir = os.path.join(os.path.dirname(__file__), '..', 'public', 'products')
os.makedirs(products_dir, exist_ok=True)

headers = {'User-Agent': 'GSREngineeringSolutions/1.0 (sales@gsrengineeringsolutions.com)'}

products_map = {
    # ---------------- 1. Mechanical Items (18 items) ----------------
    "ss-pipes": {
        "type": "wiki",
        "file": "304 STAINLESS STEEL PIPE.png"
    },
    "ss-tanks-vessels": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80"
    },
    "ss-pipe-fittings": {
        "type": "wiki",
        "file": "Kupferfittings 4062.jpg"
    },
    "gear-boxes": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    "gears-components": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80"
    },
    "couplings": {
        "type": "wiki",
        "file": "1911-09-04 Flector joint invented by A. C. KREBS (patents FR445.494, GB17.174, US1.107.315).jpg"
    },
    "ss-flanges": {
        "type": "wiki",
        "file": "ALUMINUM AND STAINLESS STEEL FLANGE ASSEMBLY - NARA - 17444079.jpg"
    },
    "ss-valves": {
        "type": "wiki",
        "file": "Ball valve--The-Alloy-Valve-Stockist.JPG"
    },
    "industrial-valves": {
        "type": "wiki",
        "file": "Cologne Germany Closed Gate-Valve-01.jpg"
    },
    "bearings": {
        "type": "wiki",
        "file": "1984 deep groove ball bearing UR 6304 made in Czechoslovakia by ZKL.jpg"
    },
    "ss-rods-bars": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    },
    "chain-sprockets": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80"
    },
    "industrial-fasteners": {
        "type": "wiki",
        "file": "1 Kilo Schrauben.jpg"
    },
    "u-bolts-clamps": {
        "type": "wiki",
        "file": "Blue Grass Chemical Agent-Destruction Pilot Plant Munitions Demilitarization Building (32632300925), clamps.jpg"
    },
    "rubber-ptfe-gaskets": {
        "type": "wiki",
        "file": "ISO-LF-Flange Center O Spacer-Ring.png"
    },
    "hose-pipes-clamps": {
        "type": "wiki",
        "file": "Evolity Stahlflex Bremsleitung.jpg"
    },
    "ss-sheets-plates": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
    },
    "industrial-casters-wheels": {
        "type": "wiki",
        "file": "Swivel Caster.jpg"
    },

    # ---------------- 2. Electrical Items (18 items) ----------------
    "mccb": {
        "type": "wiki",
        "file": "630 Amps Molded Case Circuit Breaker.jpg"
    },
    "vcb": {
        "type": "wiki",
        "file": "Vacuum circuit breaker.jpeg"
    },
    "ac-switches": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80"
    },
    "acb": {
        "type": "wiki",
        "file": "Air circuit breaker (2178638333).jpg"
    },
    "switchgear-panels": {
        "type": "wiki",
        "file": "2500A copper busbars in motor control panel.jpg"
    },
    "distribution-boards": {
        "type": "wiki",
        "file": "Older residential electrical switchboard with legacy metering and circuit breakers, Australia.jpg"
    },
    "electrical-spares": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80"
    },
    "relays-timers": {
        "type": "wiki",
        "file": "SerieT.jpg"
    },
    "power-contactors": {
        "type": "wiki",
        "file": "Magnetic contactor.png"
    },
    "push-buttons-indicators": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
    },
    "wires-cables": {
        "type": "wiki",
        "file": "143. Sections of Various High-tension Cables.jpg"
    },
    "terminal-blocks-connectors": {
        "type": "wiki",
        "file": "ABB ZS4-BL.JPG"
    },
    "lugs-terminals": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
    },
    "cable-glands-accessories": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581092916357-5896ebc48073?auto=format&fit=crop&w=800&q=80"
    },
    "fuses-fuse-holders": {
        "type": "wiki",
        "file": "200AIndustrialFuse.jpg"
    },
    "control-switches": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=800&q=80"
    },
    "mcb-rccb-elcb": {
        "type": "wiki",
        "file": "MCB Hager C10.jpg"
    },
    "busbars-copper-aluminium": {
        "type": "wiki",
        "file": "Copper-Ground-Bar 28145-480x360 (5000494972).jpg"
    },

    # ---------------- 3. Electronics & Industrial Automation (15 items) ----------------
    "proximity-sensors": {
        "type": "wiki",
        "file": "Inductive Proximity Switch.jpg"
    },
    "photoelectric-sensors": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800&q=80"
    },
    "pressure-sensors": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
    },
    "temperature-sensors": {
        "type": "wiki",
        "file": "Hygrometer probe rotronic DV-2.jpg"
    },
    "vfd-ac-drives": {
        "type": "wiki",
        "file": "Small variable-frequency drive.jpg"
    },
    "servo-drives": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80"
    },
    "plcs": {
        "type": "wiki",
        "file": "Delta PLC CPU.jpg"
    },
    "hmis-touch-panels": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
    },
    "io-modules": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    "remote-io-modules": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?auto=format&fit=crop&w=800&q=80"
    },
    "industrial-io-modules": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=800&q=80"
    },
    "industrial-automation-modules": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80"
    },
    "smps-power-supplies": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=800&q=80"
    },
    "dc-dc-converters": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80"
    },
    "ups-battery-systems": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },

    # ---------------- 4. Pneumatics Items (11 items) ----------------
    "pneumatic-cylinders": {
        "type": "wiki",
        "file": "A pneumatic cylinder (Max. press 1.0MPa).jpg"
    },
    "air-filter-regulators": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=800&q=80"
    },
    "solenoid-valves": {
        "type": "wiki",
        "file": "Solonoid valves.jpg"
    },
    "pneumatic-fittings": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
    },
    "speed-controllers": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80"
    },
    "silencers-mufflers": {
        "type": "wiki",
        "file": "Pneumatic Muffler 1.jpg"
    },
    "pu-tubes": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80"
    },
    "frl-units": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    "direction-control-valves": {
        "type": "wiki",
        "file": "A solenoid actuated pneumatic butterfly valve.jpg"
    },
    "air-preparation-units": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=800&q=80"
    },
    "pneumatic-actuators": {
        "type": "unsplash",
        "url": "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80"
    }
}

print(f"Total products to download: {len(products_map)}")

success_count = 0
failed_count = 0

for idx, (prod_id, config) in enumerate(products_map.items()):
    dest = os.path.join(products_dir, f"{prod_id}.png")
    
    if config["type"] == "wiki":
        filename = config["file"]
        url = f"https://commons.wikimedia.org/wiki/Special:FilePath/{urllib.parse.quote(filename)}?width=800"
    else:
        url = config["url"]

    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
            if len(data) > 10000:
                with open(dest, "wb") as f:
                    f.write(data)
                print(f"[{idx+1}/{len(products_map)}] OK: {prod_id} ({len(data)} bytes) from {config['type']}", flush=True)
                success_count += 1
            else:
                print(f"[{idx+1}/{len(products_map)}] TOO SMALL: {prod_id} ({len(data)} bytes)", flush=True)
                failed_count += 1
    except Exception as e:
        print(f"[{idx+1}/{len(products_map)}] ERROR {prod_id}: {e}", flush=True)
        failed_count += 1

print(f"\nFinished: {success_count} succeeded, {failed_count} failed.")
