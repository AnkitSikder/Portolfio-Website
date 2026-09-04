-- Paste this entirely into the Supabase SQL Editor

DELETE FROM public.projects WHERE slug = 'auracharge';

INSERT INTO public.projects (id, created_at, title, slug, short_description, thumbnail, hero_image, category, status, featured, display_order)
VALUES (
  gen_random_uuid(),
  now(),
  'AuraCharge',
  'auracharge',
  'A multi-functional product concept combining device charging with smart home features.',
  '',
  '',
  'Product Design',
  'Published',
  true,
  1
);

DO $$
DECLARE
  v_project_id uuid;
BEGIN
  SELECT id INTO v_project_id FROM public.projects WHERE slug = 'auracharge';

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'Hero', '{"title":"AuraCharge","summary":"Minimal footprint, maximum efficiency.","role":"Product Designer","duration":"2023 - 2024","heroImage":""}'::jsonb, 0);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'Overview', '{"title":"About The Project","description":"AuraCharge is a multi-functional product concept that combines device charging with smart home features...","audience":["Homeowners","Tech Enthusiasts"]}'::jsonb, 1);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'Text', '{"eyebrow":"Design Challenge","heading":"Minimal footprint, maximum efficiency","body":"Portable & Compact. Provides reliable power backup for devices. Unified Device. Enhances user environment with intuitive design.","alignment":"left"}'::jsonb, 2);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'ProductClassification', '{"items":[{"type":"Power Stations","capacity":"High","dimensions":"Large","weight":"Heavy","purposes":"Off-grid, RVs, Emergency backup","features":"Multiple outlets, solar charging, high power output.","image":""},{"type":"Power Houses","capacity":"Medium","dimensions":"Medium","weight":"Moderate","purposes":"Home backup, small appliances","features":"Reliable backup, decent capacity, some smart features.","image":""},{"type":"Power Inverters","capacity":"Varies","dimensions":"Varies","weight":"Varies","purposes":"Converting DC to AC for vehicles or solar","features":"Efficient conversion, pure sine wave.","image":""},{"type":"Power Banks","capacity":"Low","dimensions":"Small","weight":"Light","purposes":"Mobile devices, laptops","features":"Portable, USB charging, fast charging.","image":""}]}'::jsonb, 3);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'SWOT', '{"strengths":["Innovative smart and solar inverters","Trusted in traditional power backup","Intuitive interfaces, mobile apps","High-quality interfaces, user-centric","Reputation for innovative products"],"weaknesses":["Modern but bulky","Manual, basic monitoring","Industrial look, black/grey","Basic interfaces, limited app support","Limited integration"],"opportunities":["Smart Features: Wi-Fi, Bluetooth, voice control","Remote monitoring","App-based control in premium models"],"threats":["Lead-Acid batteries","Pure Sine Wave","Technology shifts"]}'::jsonb, 4);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'Benchmark', '{"items":[{"name":"Anker 521 PowerHouse - 256Wh | 200W","brand":"Anker","attributes":["Portable","256Wh Capacity"],"image":""},{"name":"Anker PowerHouse 767 Portable Power Station with App Connectivity","brand":"Anker","attributes":["App Connectivity","Large Capacity"],"image":""},{"name":"Anker PowerHouse 757-1229Wh | 1500W Portable Power Station","brand":"Anker","attributes":["1229Wh","1500W Output"],"image":""}]}'::jsonb, 5);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'DesignSystem', '{"heading":"Style Guide","subheading":"Typography and Color Palette","colors":[{"name":"Green","hex":"4AC140"},{"name":"Light Grey","hex":"DCDAD9"},{"name":"Grey","hex":"AAADB1"},{"name":"Dark Grey","hex":"899BAB"},{"name":"Black","hex":"000000"},{"name":"White","hex":"FFFFFF"},{"name":"Off White","hex":"E0E5E9"},{"name":"Light Blue","hex":"77ACC7"},{"name":"Blue Grey","hex":"7B92A9"},{"name":"Dark Blue","hex":"33506C"}],"typography":[{"family":"Kumbh Sans","weights":["Regular","Medium","SemiBold","Bold","ExtraBold"]}]}'::jsonb, 6);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'MindMap', '{"topic":"AuraCharge","branches":[{"name":"Core Features","subtopics":["Intelligent Energy Management","Remote Monitoring and Control","Integration with Smart Home Systems"]},{"name":"Charging & Power","subtopics":["Efficient Charging and Discharging","Emergency Power Backup","Compatibility with Solar Energy"]},{"name":"User Experience","subtopics":["User-Friendly Interface","Talk Aloud Mode","In-Built Detachable Flashlight"]},{"name":"Safety & Data","subtopics":["Fuse Detection","Data Logging and Reporting","Safety Features","Self Diagnostics"]}]}'::jsonb, 7);

  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, 'ProductRender', '{"renders":[{"image":"","layout":"full","caption":"Narzo Grey"},{"image":"","layout":"half","caption":"Rhodium Red"},{"image":"","layout":"half","caption":"Jade Green"},{"image":"","layout":"half","caption":"Midnight Blue"}]}'::jsonb, 8);

END $$;
