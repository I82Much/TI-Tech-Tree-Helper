from collections import namedtuple
import itertools

Dependency = namedtuple('Dependency', ['all_necessary', 'technologies'])

class Technology(namedtuple('Technology', ['name', 'type', 'short_description', 'full_text', 'dependencies'])):
  def __repr__(self):
    return self.name

COMBAT = 'Combat'
BIOTECH = 'Biotech'
GENERAL = 'General'
LOGISTICS = 'Logistics'
TECH_TYPES = [COMBAT, BIOTECH, GENERAL, LOGISTICS]

ENVIRO_COMPENSATOR = Technology('Enviro Compensator', 
  GENERAL,
  '+1 Production Capacity',
  'The production capacity of your Space Docks is increased by 1', 
  Dependency(False, []))

SARWEEN_TOOLS = Technology('Sarween Tools',
  GENERAL,
  '+1 Resource When Building',
  'Whenever you produce units at any Space Dock, you now receive one additional resource with which to build units.',
  Dependency(False, [ENVIRO_COMPENSATOR]))

STASIS_CAPSULES = Technology('Stasis Capsules',
  BIOTECH,
  '1 Ground Force Carried on Cruisers & Dreadnoughts',
  'Your Cruisers and Dreadnoughts may now carry one Ground Force Unit',
  Dependency(False, [ENVIRO_COMPENSATOR]))

MICRO_TECHNOLOGY = Technology(
  'Micro Technology', 
  GENERAL,
  '+1 Trade Good Per Active Trade Agreements',
  'When you execute the secondary ability of the Trade Strategy, you now receive one additional Trade Good for each of your active trade agreements.', 
  Dependency(False, [STASIS_CAPSULES,SARWEEN_TOOLS]))

NEURAL_MOTIVATOR = Technology(
  'Neural Motivator',
  BIOTECH,
  '+1 Action Card', 'You now draw one extra Action Card during each Status Phase.',
  Dependency(False, [MICRO_TECHNOLOGY,STASIS_CAPSULES]))

DACXIVE_ANIMATORS = Technology(
  'Dacxive Animators', 
  BIOTECH,
  'Extra Ground Forces During Invasion',
  ('If you win an Invasion Combat, roll once for every Ground Force unit killed (yours and your opponent\'s). '
  'For every roll of 6+, place one Ground FOrce unit on the planet from your reinforcements.'),
  Dependency(False, [NEURAL_MOTIVATOR]))

ANTIMASS_DEFLECTORS = Technology(
  'Antimass Deflectors',
  LOGISTICS,
  'Move Through Asteroid Fields',
  'All of your ships may now move through Asteroid FIelds, but may never end their movement in an Asteroid Field.', 
  Dependency(False, []))

CYBERNETICS = Technology(
  'Cybernetics', 
  BIOTECH,
  '+1 Combat Rolls for Fighters',
  'All of your Fighters now receive +1 on all combat rolls.',
  Dependency(False, [ANTIMASS_DEFLECTORS,STASIS_CAPSULES]))

GEN_SYNTHESIS = Technology(
  'Gen Synthesis',
  BIOTECH,
  '+1 Combat Rolls for Ground Units and Chance of Saving Throw',
  ('All of your Ground Forces now receive +1 on all combat rolls during Invasion Combat.\n'
  'When one of your Ground Force units is destroyed, roll a die: On a result of 5+, the unit is '
  'instead returned to a planet in your Home System'),
  Dependency(False, [CYBERNETICS]))

INTEGRATED_ECONOMY = Technology(
  'Integrated Economy', 
  GENERAL,
  'New Units Move to Adjacent System', 
  ('When producing units at your Space Docks, you may now place '
  'the new units in any activated, adjacent system that is empty, '
  'or friendly.  You may place PDS and Ground Force units on any '
  'friendly planet wthin this range.'),
  Dependency(True, [CYBERNETICS,MICRO_TECHNOLOGY]))

XRD_TRANSPORTERS = Technology(
  'XRD Transporters',
  LOGISTICS,
  '+1 Movement to Carriers',
  'All of your Carriers now receive +1 movement.',
  Dependency(False, [ANTIMASS_DEFLECTORS]))

TYPE_IV_DRIVE = Technology(
  'Type IV Drive',
  LOGISTICS,
  '+1 Movement to Cruisers and Dreadnoughts',
  'All of your Cruisers and Dreadnoughts now receive +1 movement.', 
  Dependency(True, [NEURAL_MOTIVATOR,XRD_TRANSPORTERS]))

ADVANCED_FIGHTERS = Technology(
  'Advanced Fighters',
  LOGISTICS,
  '+1 Combat to Fighters, Independent Movement Rate of 2',
  ('Your Fighters may now move independently with a movement rate of 2 '
  'and receive +1 on all combat rolls.\n'
  'Your Fighters do not require the support of Carriers or Space Docks, '
  'and enemy ships may not move through a system your Fighters occupy'),
  Dependency(False, [TYPE_IV_DRIVE]))

HYLAR_V_ASSAULT_LASER = Technology('Hylar V Assault Laser',
  COMBAT,
  '+1 Combat Rolls for Cruisers and Destroyers',
  'All of your Cruisers and Destroyers now receive +1 on all combat rolls.',
  Dependency(False, []))

DEEP_SPACE_CANNON = Technology(
  'Deep Space Cannon',
  COMBAT,
  '+1 Range to PDS',
  'Enemy fleets in adjacent systems are now in range of your PDS units.',
  Dependency(False, [HYLAR_V_ASSAULT_LASER]))

WAR_SUN = Technology(
  'War Sun',
  COMBAT,
  'War Sun available',
  'You are now allowed to produce War Sun units.',
  Dependency(True, [SARWEEN_TOOLS,DEEP_SPACE_CANNON]))

MAGEN_DEFENSE_GRID = Technology(
  'Magen Defense Grid',
  COMBAT,
  '+1 Combat Rolls for PDS and PDS Defended Ground Units',
  ('All of your PDS units now receive +1 on all combat rolls.\n'
  'In addition, all of your defending Ground Forces on a planet with a '
  'PDS receive +1 on all combat rolls during Invasion Combat.'),
  Dependency(False, [DEEP_SPACE_CANNON]))

LIGHT_WAVE_DEFLECTORS = Technology(
  'Light/Wave Deflectors',
  LOGISTICS,
  'Move Through Enemy Systems',
  ('Your ships may now move through systems containing enemy ships '
  'and continue their movement to the activated system'),
  Dependency(True, [XRD_TRANSPORTERS,MAGEN_DEFENSE_GRID]))

TRANSIT_DIODES = Technology(
  'Transit Diodes',
  GENERAL,
  'Move 4 Ground Forces As Action',
  ('As an action, you may spend one Command Counter from your Strategic Allocation to '
  'immediately move up to four of your Ground FOrces from any one of your planets to '
  'any other planet you control'),
  Dependency(False, [LIGHT_WAVE_DEFLECTORS,DACXIVE_ANIMATORS]))

GRAVITON_LASER_SYSTEM = Technology(
  'Graviton Laser System',
  GENERAL, 
  'Reroll Each PDS Miss',
  ('When you make a combat roll with a PDS unit and miss, you may now make a '
  'single re-roll for each roll that missed'),
  Dependency(False, [DEEP_SPACE_CANNON]))

ASSAULT_CANNON = Technology(
  'Assault Cannon',
  COMBAT,
  '1 Free Shot Per Dreadnought ',
  ('Before any Space Battle begins, your participating Dreadnoughts may each fire '
  'one shot. Any hits are applied immediately, and casualties do not receive return fire.'),
  Dependency(True, [DEEP_SPACE_CANNON,CYBERNETICS]))

GRAVITON_NEGATOR = Technology(
  'Graviton Negator',
  COMBAT,
  'Bombard Through PDS Defense, Invading Fighters',
  ('Your Dreadnoughts may now bombard planets that contain PDS units.  Your Fighters '
  'may participate in Invasion Combat. Surviving Fighters are returned to space after '
  'the combat and can never establish control of a planet.'),
  Dependency(False, [ASSAULT_CANNON]))

FLEET_LOGISTICS = Technology(
  'Fleet Logistics',
  LOGISTICS,
  '2 Tactical Actions',
  ('When taking a Tactical Action, you may now take two Tactical Actions, one after '
  'the other, before your turn ends.'),
  Dependency(False, [GRAVITON_NEGATOR]))

X_89_BACTERIAL_WEAPON = Technology(
  'X-89 Bacterial Weapon',
  BIOTECH, 
  'Immediately Destroy All Ground Forces With War Sun or Dreadnought',
  ('Your Dreadnought or War Sun units may now use this option before bombarding. '
  'Immediately destroy all enemy Ground Forces on the planet.  Then discard all of '
  'your Action cards.'), 
  Dependency(False, [ASSAULT_CANNON,TRANSIT_DIODES]))

TOPOLOGICAL_ORDER = [
  ENVIRO_COMPENSATOR,
  SARWEEN_TOOLS,
  STASIS_CAPSULES,
  MICRO_TECHNOLOGY,
  NEURAL_MOTIVATOR,
  DACXIVE_ANIMATORS,
  ANTIMASS_DEFLECTORS,
  CYBERNETICS,
  GEN_SYNTHESIS,
  INTEGRATED_ECONOMY,
  XRD_TRANSPORTERS,
  TYPE_IV_DRIVE,
  ADVANCED_FIGHTERS,
  HYLAR_V_ASSAULT_LASER,
  DEEP_SPACE_CANNON,
  WAR_SUN,
  MAGEN_DEFENSE_GRID,
  LIGHT_WAVE_DEFLECTORS,
  TRANSIT_DIODES,
  GRAVITON_LASER_SYSTEM,
  ASSAULT_CANNON,
  GRAVITON_NEGATOR,
  FLEET_LOGISTICS,
  X_89_BACTERIAL_WEAPON
]

COMBAT_TECHS = [x for x in TOPOLOGICAL_ORDER if x.type == COMBAT]
BIOTECH_TECHS = [x for x in TOPOLOGICAL_ORDER if x.type == BIOTECH]
GENERAL_TECHS = [x for x in TOPOLOGICAL_ORDER if x.type == GENERAL]
LOGISTIC_TECHS = [x for x in TOPOLOGICAL_ORDER if x.type == LOGISTICS]


# ENVIRO_COMPENSATOR = Technology('Enviro Compensator': [],
# 
# ['Enviro Compensator', 'Sarween Tools', 'Stasis Capsules', 'Micro Technology', 'Neural Motivator', 'Dacxive Animators', 'Antimass Deflectors', 'Cybernetics', 'Gen Synthesis', 'Integrated Economy', 'XRD Transporters', 'Type IV Drive', 'Advanced Fighters', 'Hylar V Assault Laser', 'Deep Space Cannon', 'War Sun', 'Magen Defense Grid', 'Light/Wave Deflectors', 'Transit Diodes', 'Graviton Laser System', 'Assault Cannon', 'Graviton Negator', 'Fleet Logistics', 'X-89 Bacterial Weapon']
# 
correct_order = ['Enviro Compensator', 'Sarween Tools', 'Stasis Capsules', 'Micro Technology', 'Neural Motivator', 'Dacxive Animators', 'Antimass Deflectors', 'Cybernetics', 'Gen Synthesis', 'Integrated Economy', 'XRD Transporters', 'Type IV Drive', 'Advanced Fighters', 'Hylar V Assault Laser', 'Deep Space Cannon', 'War Sun', 'Magen Defense Grid', 'Light/Wave Deflectors', 'Transit Diodes', 'Graviton Laser System', 'Assault Cannon', 'Graviton Negator', 'Fleet Logistics', 'X-89 Bacterial Weapon']

dependencies = {
  'Advanced Fighters': ['Type IV Drive'],
  'Antimass Deflectors': [],
  # AND
  'Assault Cannon': [True, 'Deep Space Cannon', 'Cybernetics'],
  'Cybernetics': ['Antimass Deflectors', 'Stasis Capsules'],
  'Dacxive Animators': ['Neural Motivator'],
  'Deep Space Cannon': ['Hylar V Assault Laser'],
  'Enviro Compensator': [],
  'Fleet Logistics': ['Graviton Negator'],
  'Gen Synthesis': ['Cybernetics'],
  'Graviton Laser System': ['Deep Space Cannon'],
  'Graviton Negator': ['Assault Cannon'],
  'Hylar V Assault Laser': [],
  # AND 
  'Integrated Economy': [True, 'Cybernetics', 'Micro Technology'],
  'Light/Wave Deflectors': ['XRD Transporters', 'Magen Defense Grid'],
  'Magen Defense Grid': ['Deep Space Cannon'],
  'Micro Technology': ['Stasis Capsules', 'Sarween Tools'],
  'Neural Motivator': ['Micro Technology', 'Stasis Capsules'],
  'Sarween Tools': ['Enviro Compensator'],
  'Stasis Capsules': ['Enviro Compensator'],
  'Transit Diodes': ['Light/Wave Deflectors', 'Dacxive Animators'],
  # AND
  'Type IV Drive': [True, 'Neural Motivator', 'XRD Transporters'],
  # AND
  'War Sun': [True, 'Sarween Tools', 'Deep Space Cannon'],
  'XRD Transporters': ['Antimass Deflectors'],
  'X-89 Bacterial Weapon': ['Assault Cannon', 'Transit Diodes'],
}

def EnumeratePaths(tech):
  """Returns a list of possible paths to this technology"""
  #print tech.name
  
  
  paths = []
  if not tech.dependencies.technologies:
    return [[]]

  elif tech.dependencies.all_necessary:
    # depends on A and B.  A has N paths, B has M paths.
    # result is A X B, for a total of N * M paths.
    
    assert len(tech.dependencies.technologies) == 2
    a_tech = tech.dependencies.technologies[0]
    b_tech = tech.dependencies.technologies[1]
    
    a_paths = [path + [a_tech] for path in EnumeratePaths(a_tech)]
    b_paths = [path + [b_tech] for path in EnumeratePaths(b_tech)]
    
    for a_path, b_path in itertools.product(a_paths, b_paths):
      paths.append(a_path + b_path)
    
  else:
    for dep in tech.dependencies.technologies:
      additional_paths = EnumeratePaths(dep)
      for additional_path in additional_paths:
        paths.append(additional_path + [dep])
  
  return paths
  
def MakeConstant(tech):
  return tech.replace(' ', '_').replace('-', '_').replace('/', '_').upper()
  
def main():
  #assert EnumeratePaths(HYLAR_V_ASSAULT_LASER) == [[]], map(StringifyPath, EnumeratePaths(HYLAR_V_ASSAULT_LASER))
  assert EnumeratePaths(DEEP_SPACE_CANNON) == [[HYLAR_V_ASSAULT_LASER]], EnumeratePaths(DEEP_SPACE_CANNON)
  
  assert EnumeratePaths(GRAVITON_LASER_SYSTEM) == [[HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON]], EnumeratePaths(GRAVITON_LASER_SYSTEM)
  
  CYBERNETICS_PATHS = [
    [ANTIMASS_DEFLECTORS],
    [ENVIRO_COMPENSATOR, STASIS_CAPSULES]
  ]
  
  STATIS_CAPSULES_PATHS = [
    [ENVIRO_COMPENSATOR]
  ]
  
  
  assert EnumeratePaths(CYBERNETICS) == CYBERNETICS_PATHS, EnumeratePaths(CYBERNETICS)
  assert EnumeratePaths(STASIS_CAPSULES) == STATIS_CAPSULES_PATHS, EnumeratePaths(STATIS_CAPSULES_PATHS)
  
  WAR_SUN_PATHS = [
    [HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, ENVIRO_COMPENSATOR, SARWEEN_TOOLS]
  ]
  LIGHT_WAVE_DEFLECTORS_PATHS = [
    [HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, MAGEN_DEFENSE_GRID, ANTIMASS_DEFLECTORS, XRD_TRANSPORTERS]
  ]
  #assert EnumeratePaths(WAR_SUN) == WAR_SUN_PATHS, EnumeratePaths(WAR_SUN)
  #assert EnumeratePaths(LIGHT_WAVE_DEFLECTORS) == LIGHT_WAVE_DEFLECTORS_PATHS, EnumeratePaths(LIGHT_WAVE_DEFLECTORS)

  # print EnumeratePaths(TYPE_IV_DRIVE)
  #   print EnumeratePaths(X_89_BACTERIAL_WEAPON)
  
  assert EnumeratePaths(HYLAR_V_ASSAULT_LASER) == [[]]
  
  print 'var TECH_PATHS = {};'
  for tech_type in TECH_TYPES:
    for tech in TOPOLOGICAL_ORDER:
      if tech.type == tech_type:
        # 2 dimensional array
        paths = EnumeratePaths(tech)
        
        path_strings = []
        for path in paths:
          #path_strings.append(str([MakeConstant(t.name).lower() for t in path]))
          path_strings.append('[' + ', '.join([MakeConstant(t.name) for t in path]) + ']')

        print 'TECH_PATHS[\'{tech_id}\'] = ['.format(
          tech_id=MakeConstant(tech.name).lower())
        print ',\n'.join(['  ' + x for x in path_strings])
        print '];'
        
        
          # print '\t' + t.name
          # paths = EnumeratePaths(t)
          # print '\t %d paths' %(len(paths))
          # for path in paths:
          #   print '\t\t: %d ' %(len(path)) + '->'.join([dep_tech.name for dep_tech in path])
        
  
if __name__ == '__main__':
  main()
