DO $$
DECLARE
  v_project_id uuid := 'a959ad20-7411-456a-9a5a-02fb6512b88d';
BEGIN
  -- Clear existing blocks from index 3 onwards to avoid duplicates
  DELETE FROM public.blocks WHERE project_id = v_project_id AND order_index >= 3;

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'Statistic', '{
    "stats": [
      { "number": "8.5B", "label": "INR Current Market", "description": "Projected to hit 19.6B by 2033" },
      { "number": "85%", "label": "Global Supply", "description": "Grown primarily in the wetlands of Bihar" },
      { "number": "3,000+", "label": "Crore Industry", "description": "Severely threatened by a mounting labor crisis" }
    ]
  }'::jsonb, 3);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'Comparison', '{
    "insight": "For generations, the only tools available have been unchanged bamboo implements that offer zero mechanical advantage.",
    "items": [
      { "name": "Kaara (Anchor Pole)", "attributes": ["2-3 meter bamboo pole", "Anchoring reference only", "Requires full submersion", "Zero collection assistance"] },
      { "name": "Ganjaa (Bamboo Sieve)", "attributes": ["40-60 cm woven basket", "Used to separate seeds from mud", "No ergonomic handles", "Causes severe hand fatigue"] }
    ]
  }'::jsonb, 4);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'ResearchInsights', '{
    "heading": "05. OBSERVATIONAL RESEARCH",
    "intro": "To understand the reality of the harvest, we analyzed the physical toll of traditional methods in Mithilanchal.",
    "insights": [
      { "number": "01", "title": "Ergonomic Hazard", "description": "Prolonged prone and bent postures result in a 78% rate of chronic lower back pain among harvesters." },
      { "number": "02", "title": "Zero Protection", "description": "Workers handle the thorny aquatic plants bare-handed, suffering daily puncture wounds and infections." },
      { "number": "03", "title": "Extreme Inefficiency", "description": "Despite the grueling physical effort, productivity stagnates at 3.8-4.0 kg/hour, leaving nearly 25% of seeds uncollected." }
    ],
    "opportunityPrefix": "The insight:",
    "opportunityText": "We cannot automate this entirely for small-scale farmers—but we can completely eliminate the postural stress and manual sweeping."
  }'::jsonb, 5);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'Persona', '{
    "personas": [
      {
        "name": "Rajesh",
        "role": "Makhana Seed Harvester",
        "bio": "38 years old • 22 years experience • Mallah Community",
        "quote": "I''m proud of what I do, but my body hurts. I want my children educated, but I hope they can stay in this work with better tools.",
        "goals": ["Reduced physical strain and back pain", "Better safety from thorns and infections", "Higher hourly productivity to boost earnings"],
        "frustrations": ["Chronic pain in lower back, neck, and wrists", "Economic exploitation by intermediaries", "Fear of permanent disability from daily injuries"]
      }
    ]
  }'::jsonb, 6);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'SWOT', '{
    "strengths": ["“My hands are covered in thorn marks and my whole body hurts.”", "“These tools haven''t changed in generations - without hands, we cannot harvest.”", "“There must be a better way to do this - if someone designed something, I''d use it.”"],
    "weaknesses": ["“This is my family''s occupation, but the suffering makes me wonder if my children will do this.”", "“I''m earning only 12-25% of the retail value while farmers get rich.”", "“Machines exist but cost Rs 1-3 lakh - we can''t afford them.”"],
    "opportunities": ["Submerges in murky pond water 6-8 hours daily in bent-over, prone positions.", "Uses bamboo sieves to separate seeds from mud through vigorous shaking, repeating 50-100 times.", "Applies traditional medicinal oils nightly to treat daily puncture wounds."],
    "threats": ["Resentment that his destroyed body earns so little of the product value.", "Skilled at difficult ancestral work but ashamed young people view this as low-status.", "Fears occupation will disappear entirely as younger generation abandons it."]
  }'::jsonb, 7);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'Text', '{
    "eyebrow": "The Mission",
    "heading": "Empower Harvesters, Preserve Tradition",
    "body": "To design an affordable (under Rs 5,000), ergonomically optimized hand tool that enables makhana farmers to collect seeds safely and productively. The goal is to reduce physical strain by 50%, minimize thorn injuries, and increase productivity to 6-8 kg/hour—all while remaining accessible to small-scale farmers and preserving occupational continuity.",
    "alignment": "left"
  }'::jsonb, 8);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'Table', '{
    "heading": "Defining Success (User Needs)",
    "columns": ["Need", "Current Reality", "Target Outcome"],
    "rows": [
      ["Reduce musculoskeletal strain", "78% lower back pain, extreme bending", "30-50% pain reduction, upright posture"],
      ["Prevent thorn injuries", "Nearly 100% daily puncture wounds", "50% fewer injuries, integrated protection"],
      ["Increase productivity", "3.8-4.0 kg/hr; Rs 250-600/day", "6-8 kg/hr; Rs 400-800/day earnings"],
      ["Improve seed recovery", "25% of seeds lost during collection", "Recover 5-10% additional seeds"],
      ["Maintain dignity", "Shame, disappearing knowledge", "Respected occupation, youth retention"]
    ]
  }'::jsonb, 9);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'ImageGallery', '{
    "title": "Exploring Form & Function",
    "layout": "bento",
    "images": [ 
      { "url": "", "caption": "Roller concepts" }, 
      { "url": "", "caption": "Scoop and sieve mechanisms" }, 
      { "url": "", "caption": "Finalizing the push-pull architecture" } 
    ]
  }'::jsonb, 10);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'SolutionCapabilities', '{
    "heading": "THE SOLUTION",
    "productName": "Makhana Seed Collector",
    "subtitle": "An ergonomic intervention that transforms harvesting from a prone, tactile search into an upright, mechanical sweep.",
    "capabilities": [
      { "number": "01", "title": "Ergonomic Pull Handle", "description": "Allows the user to operate the tool while standing, entirely eliminating the need for 6-8 hours of submerged, bent-over labor." },
      { "number": "02", "title": "Silicone Spike Agitation", "description": "A rolling brush safely dislodges seeds from the muddy pond bed, trapping plant debris and preventing thorn injuries." },
      { "number": "03", "title": "Integrated Mesh Sieve", "description": "Separates the mud and water on the go, catching the seeds directly in a stainless steel basket for easy lifting." }
    ]
  }'::jsonb, 11);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'Table', '{
    "heading": "Materials & Manufacturing",
    "columns": ["Component", "Material", "Rationale"],
    "rows": [
      ["Loader Bucket & Basket", "Stainless Steel", "Corrosion resistance in aquatic environments; highly durable."],
      ["Agitation Brush", "Silicone", "Flexible enough to navigate mud without damaging the delicate seeds."],
      ["Handle Grip", "Rubber", "Ensures a secure, non-slip grip during hours of water-based labor."],
      ["Wheels & Chain", "Stainless Steel / Iron", "Provides heavy-duty traction across uneven, muddy pond beds."]
    ]
  }'::jsonb, 12);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'ProductRender', '{
    "renders": [
      { "image": "", "layout": "full", "caption": "The fully assembled Makhana Seed Collector" },
      { "image": "", "layout": "half", "caption": "Mesh Chamber Details" },
      { "image": "", "layout": "half", "caption": "Traction Wheel Assembly" }
    ]
  }'::jsonb, 13);

END $$;
