
WITH inserted_project AS (
  INSERT INTO projects (title, slug, short_description, thumbnail, hero_image, category, status, featured, display_order)
  VALUES (
    'Immersive Traffic Command',
    'immersive-traffic-command',
    'VR-based traffic enforcement training for Indian police personnel',
    '/assets/projects/immersive-traffic-command/page_1.png',
    '/assets/projects/immersive-traffic-command/page_1.png',
    'Interaction Design',
    'Published',
    true,
    1
  )
  ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    short_description = EXCLUDED.short_description,
    thumbnail = EXCLUDED.thumbnail,
    hero_image = EXCLUDED.hero_image,
    category = EXCLUDED.category,
    status = EXCLUDED.status,
    featured = EXCLUDED.featured,
    display_order = EXCLUDED.display_order
  RETURNING id
),
deleted_blocks AS (
  DELETE FROM blocks WHERE project_id IN (SELECT id FROM inserted_project)
)
INSERT INTO blocks (project_id, type, content, order_index)
VALUES
((SELECT id FROM inserted_project), 'Hero', '{"title":"Immersive Traffic Command","summary":"VR-based traffic enforcement training for Indian police personnel.","role":"Interaction Designer","duration":"3 Months","heroImage":"/assets/projects/immersive-traffic-command/page_1.png"}'::jsonb, 0),
((SELECT id FROM inserted_project), 'Image', '{"image":"/assets/projects/immersive-traffic-command/page_2.png","width":"contained","caption":"The Problem Statement: Current training vs The Reality"}'::jsonb, 1),
((SELECT id FROM inserted_project), 'FeaturesGrid', '{"heading":"The Quantum of the Problem","columns":3,"items":[{"title":"Economic Hemorrhage","description":"India loses ~3% of GDP annually to inefficiency. Static signals create bottlenecks."},{"title":"\"Golden Hour\" Failure","description":"1.5 Lakh+ annual deaths. Officers \"freeze\" when ambulances approach."},{"title":"The Safety Deficit","description":"Rising aggression & public distrust. Minor stops turn into major conflicts."}]}'::jsonb, 2),
((SELECT id FROM inserted_project), 'Image', '{"image":"/assets/projects/immersive-traffic-command/page_4.png","width":"contained","caption":"Interaction Mapping: Erratic Driver, Ambulance, Pedestrian, VIP Convoy"}'::jsonb, 3),
((SELECT id FROM inserted_project), 'Image', '{"image":"/assets/projects/immersive-traffic-command/page_5.png","width":"contained","caption":"The Opportunity Triangle"}'::jsonb, 4),
((SELECT id FROM inserted_project), 'FeaturesGrid', '{"heading":"Position in Interaction Design","columns":2,"items":[{"title":"The Design Challenge","description":"It''s not just about \"seeing\" traffic; it''s about Proprioception and Stress Inoculation."},{"title":"Feedback Loops","description":"Visual, Haptic, and Audio feedback."}]}'::jsonb, 5),
((SELECT id FROM inserted_project), 'FeaturesGrid', '{"heading":"Solution Concept","columns":3,"items":[{"title":"The \"Indian\" Chaos","description":"Simulates mixed traffic reality: rickshaws, wrong-side driving, and stray animals."},{"title":"Hand Signal Mastery","description":"Leverages hand-tracking to verify visibility and precision."},{"title":"Soft Skills & De-escalation","description":"Scenarios focused on de-escalating angry drivers."}]}'::jsonb, 6),
((SELECT id FROM inserted_project), 'Image', '{"image":"/assets/projects/immersive-traffic-command/page_8.png","width":"contained","caption":"Refined Problem Statement"}'::jsonb, 7),
((SELECT id FROM inserted_project), 'Timeline', '{"heading":"Project Timeline","events":[{"date":"FEBRUARY","title":"Phase 1: Discovery","description":"Secondary Research\nStakeholder Mapping\nUser Personas"},{"date":"FEBRUARY","title":"Phase 2: Explore","description":"Field Site Visits\nTask Analysis\nFeasibility Study"},{"date":"MARCH","title":"Phase 3: Build","description":"3D Asset Modeling\nUnity Environment\nLab Coordination"},{"date":"APRIL","title":"Phase 4: Test & Iterate","description":"UAT / NASA TLX\nDesign Refinement\nDocumentation"}]}'::jsonb, 8),
((SELECT id FROM inserted_project), 'CombinedResearch', '{"heading":"Primary Research Insights","interviews":{"heading":"Problem Areas","findings":[{"id":1,"title":"Gap Between Theory and Practice","description":"Classroom learning doesn''t prepare for chaotic real-time road decisions."},{"id":2,"title":"High Learning Curve","description":"New recruits face a confidence gap."},{"id":3,"title":"Resource Constraints","description":"Lack of fixed structure; reliance on inconsistent on-the-job learning."}]},"surveys":{"heading":"Opportunity Areas","findings":[{"id":1,"title":"Virtual Simulation","description":"Risk-free practice for high-stress scenarios."},{"id":2,"title":"Adaptive Learning","description":"Digital simulations tracking response to traffic flow."},{"id":3,"title":"AI Integration","description":"Data-based management and investigation procedures."}]},"image":"/assets/projects/immersive-traffic-command/page_12.png"}'::jsonb, 9),
((SELECT id FROM inserted_project), 'Image', '{"image":"/assets/projects/immersive-traffic-command/page_13.png","width":"full","caption":"CPM-GOMS Task Analysis"}'::jsonb, 10),
((SELECT id FROM inserted_project), 'FeaturesGrid', '{"heading":"The \"Anti-Design Thinking\" Stingray Model","columns":3,"items":[{"title":"Train","description":"Feeding Gemini specific constraints, MoRTH regulations, and personas."},{"title":"Develop","description":"Simultaneous problem/solution exploration. Writing logic code while refining the flow."},{"title":"Iterate","description":"Using Synthetic Users to simulate edge cases and UX friction before physical testing."}]}'::jsonb, 11),
((SELECT id FROM inserted_project), 'Pipeline', '{"heading":"Technical Execution","steps":[{"title":"Asset Creation","description":"Low-Poly Modeling (Blender, Shapr3D) & PBR Texturing"},{"title":"Integration & Logic","description":"XR Interaction Toolkit & C# Scripting with Gemini"},{"title":"Environment Optimization","description":"Occlusion Culling & Lightmap Baking"}]}'::jsonb, 12),
((SELECT id FROM inserted_project), 'Image', '{"image":"/assets/projects/immersive-traffic-command/page_17.png","width":"full","caption":"The 7 Core Hand Signals"}'::jsonb, 13),
((SELECT id FROM inserted_project), 'ImageGallery', '{"layout":"grid","images":[{"url":"/assets/projects/immersive-traffic-command/page_18.png","caption":"Spatial Design & Environment"},{"url":"/assets/projects/immersive-traffic-command/page_19.png","caption":"Instructor Character Design"}]}'::jsonb, 14),
((SELECT id FROM inserted_project), 'MoSCoW', '{"mustHave":["Indian Road Prospect","Standard Booth","System Logic","7 Core Signals","Vehicle AI"],"shouldHave":["\"Ghost Hand\" Hints","Multi-modal Feedback","Success Cues","3-Strike System","Spatial Audio"],"couldHave":["Reinforcement audio","Ergonomic UI","Nielsen standards","Rationale text"],"wontHave":["Avatars (Recruitment standard)","Weather Cycles","Biometrics","22 Major Indian languages","Full-body control"]}'::jsonb, 15),
((SELECT id FROM inserted_project), 'Image', '{"image":"/assets/projects/immersive-traffic-command/page_21.png","width":"full","caption":"Process Flow"}'::jsonb, 16),
((SELECT id FROM inserted_project), 'FeaturesGrid', '{"heading":"Spatial UI Design & Ergonomics","columns":3,"items":[{"title":"Optimized FOV","description":"Tutorial interface centered within the 110° horizontal cone of vision."},{"title":"Visual Ergonomics","description":"Scales calculated based on spatial distance."},{"title":"Spatial Depth","description":"Fixed ergonomic distance mitigates vergence-accommodation conflict."}]}'::jsonb, 17),
((SELECT id FROM inserted_project), 'Comparison', '{"insight":"Visual Scaffolding & Performance Verification","items":[{"title":"Tutorial Mode","text":"Guided Learning with Ghost Hands, Detection Volumes, Feedback Loop, and Sequential Progression.","image":"/assets/projects/immersive-traffic-command/page_24.png"},{"title":"Evaluation Mode","text":"Recall & Stress testing. Scaffolding Removed, Ground Truth Triggers, Dynamic Feedback.","image":"/assets/projects/immersive-traffic-command/page_24.png"}]}'::jsonb, 18),
((SELECT id FROM inserted_project), 'ExpandableCards', '{"heading":"Usability Heuristics (Nielsen & Shneiderman)","cards":[{"title":"Visibility of System Status","content":"Progress bar, HUD elements for score/time, synchronized hand cutouts."},{"title":"Match System & Real World","content":"MoRTH standards, Indian junction layouts, senior trainer character."},{"title":"Error Prevention","content":"Strike system (3 lives), collision physics, Ghost Hands visual scaffolding."},{"title":"Recognition vs Recall","content":"Visual hints, spatial audio cues."},{"title":"Offer Informative Feedback","content":"\"Ding\" sound + Tick icon for successful signals."}]}'::jsonb, 19),
((SELECT id FROM inserted_project), 'Learnings', '{"heading":"Testing Feedback & Iterations","items":[{"problem":"Did you feel overwhelmed or \"frozen\" when the evaluation mode started?","learning":"Initial Freezing: Two people reported feeling overwhelmed due to forgetting actions when vehicles approached."},{"problem":"Is this VR practice better than reading the training manual?","learning":"Effectiveness: VR practice is universally considered superior because of actual engagement, real-scenario practice, and multi-sensory experiences."},{"problem":"Did the Invisible Detection Boxes accurately catch your hand gestures?","learning":"Accuracy Issues: Detection was sometimes inconsistent. Needed adjustments for height issues and box sizes."}]}'::jsonb, 20),
((SELECT id FROM inserted_project), 'Image', '{"image":"/assets/projects/immersive-traffic-command/page_31.png","width":"full","caption":"NASA-TLX Responses"}'::jsonb, 21);