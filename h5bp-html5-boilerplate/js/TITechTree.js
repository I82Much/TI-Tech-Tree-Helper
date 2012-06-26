// Author: Nicholas Dunn
// Adapted from the Technology Tree from Twilight Imperium Edition 3

var ENVIRO_COMPENSATOR = {
  name: "Enviro Compensator",
  id: "enviro_compensator",
  type: "General",
  short_description: "+1 Production Capacity",
  full_text: "The production capacity of your Space Docks is increased by 1",
  and_dep: false,
  dependencies: []
};

var SARWEEN_TOOLS = {
  name: "Sarween Tools",
  id: "sarween_tools",
  type: "General",
  short_description: "+1 Resource When Building",
  full_text: "Whenever you produce units at any Space Dock, you now receive one additional resource with which to build units.",
  and_dep: false,
  dependencies: [ENVIRO_COMPENSATOR]
};

var STASIS_CAPSULES = {
  name: "Stasis Capsules",
  id: "stasis_capsules",
  type: "Biotech",
  short_description: "1 Ground Force Carried on Cruisers & Dreadnoughts",
  full_text: "Your Cruisers and Dreadnoughts may now carry one Ground Force Unit",
  and_dep: false,
  dependencies: [ENVIRO_COMPENSATOR]
};

var MICRO_TECHNOLOGY = {
  name: "Micro Technology",
  id: "micro_technology",
  type: "General",
  short_description: "+1 Trade Good Per Active Trade Agreements",
  full_text: "When you execute the secondary ability of the Trade Strategy, you now receive one additional Trade Good for each of your active trade agreements.",
  and_dep: false,
  dependencies: [STASIS_CAPSULES, SARWEEN_TOOLS]
};

var NEURAL_MOTIVATOR = {
  name: "Neural Motivator",
  id: "neural_motivator",
  type: "Biotech",
  short_description: "+1 Action Card",
  full_text: "You now draw one extra Action Card during each Status Phase.",
  and_dep: false,
  dependencies: [MICRO_TECHNOLOGY, STASIS_CAPSULES]
};

var DACXIVE_ANIMATORS = {
  name: "Dacxive Animators",
  id: "dacxive_animators",
  type: "Biotech",
  short_description: "Extra Ground Forces During Invasion",
  full_text: "If you win an Invasion Combat, roll once for every Ground Force unit killed (yours and your opponent's). For every roll of 6+, place one Ground FOrce unit on the planet from your reinforcements.",
  and_dep: false,
  dependencies: [NEURAL_MOTIVATOR]
};

var ANTIMASS_DEFLECTORS = {
  name: "Antimass Deflectors",
  id: "antimass_deflectors",
  type: "Logistics",
  short_description: "Move Through Asteroid Fields",
  full_text: "All of your ships may now move through Asteroid FIelds, but may never end their movement in an Asteroid Field.",
  and_dep: false,
  dependencies: []
};

var CYBERNETICS = {
  name: "Cybernetics",
  id: "cybernetics",
  type: "Biotech",
  short_description: "+1 Combat Rolls for Fighters",
  full_text: "All of your Fighters now receive +1 on all combat rolls.",
  and_dep: false,
  dependencies: [ANTIMASS_DEFLECTORS, STASIS_CAPSULES]
};

var GEN_SYNTHESIS = {
  name: "Gen Synthesis",
  id: "gen_synthesis",
  type: "Biotech",
  short_description: "+1 Combat Rolls for Ground Units and Chance of Saving Throw",
  full_text: "All of your Ground Forces now receive +1 on all combat rolls during Invasion Combat.\nWhen one of your Ground Force units is destroyed, roll a die: On a result of 5+, the unit is instead returned to a planet in your Home System",
  and_dep: false,
  dependencies: [CYBERNETICS]
};

var INTEGRATED_ECONOMY = {
  name: "Integrated Economy",
  id: "integrated_economy",
  type: "General",
  short_description: "New Units Move to Adjacent System",
  full_text: "When producing units at your Space Docks, you may now place the new units in any activated, adjacent system that is empty, or friendly.  You may place PDS and Ground Force units on any friendly planet wthin this range.",
  and_dep: true,
  dependencies: [CYBERNETICS, MICRO_TECHNOLOGY]
};

var XRD_TRANSPORTERS = {
  name: "XRD Transporters",
  id: "xrd_transporters",
  type: "Logistics",
  short_description: "+1 Movement to Carriers",
  full_text: "All of your Carriers now receive +1 movement.",
  and_dep: false,
  dependencies: [ANTIMASS_DEFLECTORS]
};

var TYPE_IV_DRIVE = {
  name: "Type IV Drive",
  id: "type_iv_drive",
  type: "Logistics",
  short_description: "+1 Movement to Cruisers and Dreadnoughts",
  full_text: "All of your Cruisers and Dreadnoughts now receive +1 movement.",
  and_dep: true,
  dependencies: [NEURAL_MOTIVATOR, XRD_TRANSPORTERS]
};

var ADVANCED_FIGHTERS = {
  name: "Advanced Fighters",
  id: "advanced_fighters",
  type: "Logistics",
  short_description: "+1 Combat to Fighters, Independent Movement Rate of 2",
  full_text: "Your Fighters may now move independently with a movement rate of 2 and receive +1 on all combat rolls.\nYour Fighters do not require the support of Carriers or Space Docks, and enemy ships may not move through a system your Fighters occupy",
  and_dep: false,
  dependencies: [TYPE_IV_DRIVE]
};

var HYLAR_V_ASSAULT_LASER = {
  name: "Hylar V Assault Laser",
  id: "hylar_v_assault_laser",
  type: "Combat",
  short_description: "+1 Combat Rolls for Cruisers and Destroyers",
  full_text: "All of your Cruisers and Destroyers now receive +1 on all combat rolls.",
  and_dep: false,
  dependencies: []
};

var DEEP_SPACE_CANNON = {
  name: "Deep Space Cannon",
  id: "deep_space_cannon",
  type: "Combat",
  short_description: "+1 Range to PDS",
  full_text: "Enemy fleets in adjacent systems are now in range of your PDS units.",
  and_dep: false,
  dependencies: [HYLAR_V_ASSAULT_LASER]
};

var WAR_SUN = {
  name: "War Sun",
  id: "war_sun",
  type: "Combat",
  short_description: "War Sun available",
  full_text: "You are now allowed to produce War Sun units.",
  and_dep: true,
  dependencies: [SARWEEN_TOOLS, DEEP_SPACE_CANNON]
};

var MAGEN_DEFENSE_GRID = {
  name: "Magen Defense Grid",
  id: "magen_defense_grid",
  type: "Combat",
  short_description: "+1 Combat Rolls for PDS and PDS Defended Ground Units",
  full_text: "All of your PDS units now receive +1 on all combat rolls.\nIn addition, all of your defending Ground Forces on a planet with a PDS receive +1 on all combat rolls during Invasion Combat.",
  and_dep: false,
  dependencies: [DEEP_SPACE_CANNON]
};

var LIGHT_WAVE_DEFLECTORS = {
  name: "Light/Wave Deflectors",
  id: "light_wave_deflectors",
  type: "Logistics",
  short_description: "Move Through Enemy Systems",
  full_text: "Your ships may now move through systems containing enemy ships and continue their movement to the activated system",
  and_dep: true,
  dependencies: [XRD_TRANSPORTERS, MAGEN_DEFENSE_GRID]
};

var TRANSIT_DIODES = {
  name: "Transit Diodes",
  id: "transit_diodes",
  type: "General",
  short_description: "Move 4 Ground Forces As Action",
  full_text: "As an action, you may spend one Command Counter from your Strategic Allocation to immediately move up to four of your Ground FOrces from any one of your planets to any other planet you control",
  and_dep: false,
  dependencies: [LIGHT_WAVE_DEFLECTORS, DACXIVE_ANIMATORS]
};

var GRAVITON_LASER_SYSTEM = {
  name: "Graviton Laser System",
  id: "graviton_laser_system",
  type: "General",
  short_description: "Reroll Each PDS Miss",
  full_text: "When you make a combat roll with a PDS unit and miss, you may now make a single re-roll for each roll that missed",
  and_dep: false,
  dependencies: [DEEP_SPACE_CANNON]
};

var ASSAULT_CANNON = {
  name: "Assault Cannon",
  id: "assault_cannon",
  type: "Combat",
  short_description: "1 Free Shot Per Dreadnought ",
  full_text: "Before any Space Battle begins, your participating Dreadnoughts may each fire one shot. Any hits are applied immediately, and casualties do not receive return fire.",
  and_dep: true,
  dependencies: [DEEP_SPACE_CANNON, CYBERNETICS]
};

var GRAVITON_NEGATOR = {
  name: "Graviton Negator",
  id: "graviton_negator",
  type: "Combat",
  short_description: "Bombard Through PDS Defense, Invading Fighters",
  full_text: "Your Dreadnoughts may now bombard planets that contain PDS units.  Your Fighters may participate in Invasion Combat. Surviving Fighters are returned to space after the combat and can never establish control of a planet.",
  and_dep: false,
  dependencies: [ASSAULT_CANNON]
};

var FLEET_LOGISTICS = {
  name: "Fleet Logistics",
  id: "fleet_logistics",
  type: "Logistics",
  short_description: "2 Tactical Actions",
  full_text: "When taking a Tactical Action, you may now take two Tactical Actions, one after the other, before your turn ends.",
  and_dep: false,
  dependencies: [GRAVITON_NEGATOR]
};

var X_89_BACTERIAL_WEAPON = {
  name: "X-89 Bacterial Weapon",
  id: "x_89_bacterial_weapon",
  type: "Biotech",
  short_description: "Immediately Destroy All Ground Forces With War Sun or Dreadnought",
  full_text: "Your Dreadnought or War Sun units may now use this option before bombarding. Immediately destroy all enemy Ground Forces on the planet.  Then discard all of your Action cards.",
  and_dep: false,
  dependencies: [ASSAULT_CANNON, TRANSIT_DIODES]
};

var COMBAT_TECHS = [HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, WAR_SUN, MAGEN_DEFENSE_GRID, ASSAULT_CANNON, GRAVITON_NEGATOR];

var BIOTECH_TECHS = [STASIS_CAPSULES, NEURAL_MOTIVATOR, DACXIVE_ANIMATORS, CYBERNETICS, GEN_SYNTHESIS, X_89_BACTERIAL_WEAPON];

var GENERAL_TECHS = [ENVIRO_COMPENSATOR, SARWEEN_TOOLS, MICRO_TECHNOLOGY, INTEGRATED_ECONOMY, TRANSIT_DIODES, GRAVITON_LASER_SYSTEM];

var LOGISTIC_TECHS = [ANTIMASS_DEFLECTORS, XRD_TRANSPORTERS, TYPE_IV_DRIVE, ADVANCED_FIGHTERS, LIGHT_WAVE_DEFLECTORS, FLEET_LOGISTICS];

var ROW_ORDER = [COMBAT_TECHS, BIOTECH_TECHS, GENERAL_TECHS, LOGISTIC_TECHS];

// Precomputed tech paths
var TECH_PATHS = {};
TECH_PATHS['hylar_v_assault_laser'] = [
  []
];
TECH_PATHS['deep_space_cannon'] = [
  [HYLAR_V_ASSAULT_LASER]
];
TECH_PATHS['war_sun'] = [
  [ENVIRO_COMPENSATOR, SARWEEN_TOOLS, HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON]
];
TECH_PATHS['magen_defense_grid'] = [
  [HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON]
];
TECH_PATHS['assault_cannon'] = [
  [HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, ANTIMASS_DEFLECTORS, CYBERNETICS],
  [HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, ENVIRO_COMPENSATOR, STASIS_CAPSULES, CYBERNETICS]
];
TECH_PATHS['graviton_negator'] = [
  [HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, ANTIMASS_DEFLECTORS, CYBERNETICS, ASSAULT_CANNON],
  [HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, ENVIRO_COMPENSATOR, STASIS_CAPSULES, CYBERNETICS, ASSAULT_CANNON]
];
TECH_PATHS['stasis_capsules'] = [
  [ENVIRO_COMPENSATOR]
];
TECH_PATHS['neural_motivator'] = [
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, MICRO_TECHNOLOGY],
  [ENVIRO_COMPENSATOR, SARWEEN_TOOLS, MICRO_TECHNOLOGY],
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES]
];
TECH_PATHS['dacxive_animators'] = [
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, MICRO_TECHNOLOGY, NEURAL_MOTIVATOR],
  [ENVIRO_COMPENSATOR, SARWEEN_TOOLS, MICRO_TECHNOLOGY, NEURAL_MOTIVATOR],
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, NEURAL_MOTIVATOR]
];
TECH_PATHS['cybernetics'] = [
  [ANTIMASS_DEFLECTORS],
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES]
];
TECH_PATHS['gen_synthesis'] = [
  [ANTIMASS_DEFLECTORS, CYBERNETICS],
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, CYBERNETICS]
];
TECH_PATHS['x_89_bacterial_weapon'] = [
  [HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, ANTIMASS_DEFLECTORS, CYBERNETICS, ASSAULT_CANNON],
  [HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, ENVIRO_COMPENSATOR, STASIS_CAPSULES, CYBERNETICS, ASSAULT_CANNON],
  [ANTIMASS_DEFLECTORS, XRD_TRANSPORTERS, HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, MAGEN_DEFENSE_GRID, LIGHT_WAVE_DEFLECTORS, TRANSIT_DIODES],
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, MICRO_TECHNOLOGY, NEURAL_MOTIVATOR, DACXIVE_ANIMATORS, TRANSIT_DIODES],
  [ENVIRO_COMPENSATOR, SARWEEN_TOOLS, MICRO_TECHNOLOGY, NEURAL_MOTIVATOR, DACXIVE_ANIMATORS, TRANSIT_DIODES],
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, NEURAL_MOTIVATOR, DACXIVE_ANIMATORS, TRANSIT_DIODES]
];
TECH_PATHS['enviro_compensator'] = [
  []
];
TECH_PATHS['sarween_tools'] = [
  [ENVIRO_COMPENSATOR]
];
TECH_PATHS['micro_technology'] = [
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES],
  [ENVIRO_COMPENSATOR, SARWEEN_TOOLS]
];
TECH_PATHS['integrated_economy'] = [
  [ANTIMASS_DEFLECTORS, CYBERNETICS, ENVIRO_COMPENSATOR, STASIS_CAPSULES, MICRO_TECHNOLOGY],
  [ANTIMASS_DEFLECTORS, CYBERNETICS, ENVIRO_COMPENSATOR, SARWEEN_TOOLS, MICRO_TECHNOLOGY],
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, CYBERNETICS, ENVIRO_COMPENSATOR, STASIS_CAPSULES, MICRO_TECHNOLOGY],
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, CYBERNETICS, ENVIRO_COMPENSATOR, SARWEEN_TOOLS, MICRO_TECHNOLOGY]
];
TECH_PATHS['transit_diodes'] = [
  [ANTIMASS_DEFLECTORS, XRD_TRANSPORTERS, HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, MAGEN_DEFENSE_GRID, LIGHT_WAVE_DEFLECTORS],
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, MICRO_TECHNOLOGY, NEURAL_MOTIVATOR, DACXIVE_ANIMATORS],
  [ENVIRO_COMPENSATOR, SARWEEN_TOOLS, MICRO_TECHNOLOGY, NEURAL_MOTIVATOR, DACXIVE_ANIMATORS],
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, NEURAL_MOTIVATOR, DACXIVE_ANIMATORS]
];
TECH_PATHS['graviton_laser_system'] = [
  [HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON]
];
TECH_PATHS['antimass_deflectors'] = [
  []
];
TECH_PATHS['xrd_transporters'] = [
  [ANTIMASS_DEFLECTORS]
];
TECH_PATHS['type_iv_drive'] = [
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, MICRO_TECHNOLOGY, NEURAL_MOTIVATOR, ANTIMASS_DEFLECTORS, XRD_TRANSPORTERS],
  [ENVIRO_COMPENSATOR, SARWEEN_TOOLS, MICRO_TECHNOLOGY, NEURAL_MOTIVATOR, ANTIMASS_DEFLECTORS, XRD_TRANSPORTERS],
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, NEURAL_MOTIVATOR, ANTIMASS_DEFLECTORS, XRD_TRANSPORTERS]
];
TECH_PATHS['advanced_fighters'] = [
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, MICRO_TECHNOLOGY, NEURAL_MOTIVATOR, ANTIMASS_DEFLECTORS, XRD_TRANSPORTERS, TYPE_IV_DRIVE],
  [ENVIRO_COMPENSATOR, SARWEEN_TOOLS, MICRO_TECHNOLOGY, NEURAL_MOTIVATOR, ANTIMASS_DEFLECTORS, XRD_TRANSPORTERS, TYPE_IV_DRIVE],
  [ENVIRO_COMPENSATOR, STASIS_CAPSULES, NEURAL_MOTIVATOR, ANTIMASS_DEFLECTORS, XRD_TRANSPORTERS, TYPE_IV_DRIVE]
];
TECH_PATHS['light_wave_deflectors'] = [
  [ANTIMASS_DEFLECTORS, XRD_TRANSPORTERS, HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, MAGEN_DEFENSE_GRID]
];
TECH_PATHS['fleet_logistics'] = [
  [HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, ANTIMASS_DEFLECTORS, CYBERNETICS, ASSAULT_CANNON, GRAVITON_NEGATOR],
  [HYLAR_V_ASSAULT_LASER, DEEP_SPACE_CANNON, ENVIRO_COMPENSATOR, STASIS_CAPSULES, CYBERNETICS, ASSAULT_CANNON, GRAVITON_NEGATOR]
];


var this_ = this;

// TODO(ndunn): Move to closure
// memoize the calculated paths
var pathsMap = {};

var hide = getURLParameter('hide') == ['true'];
if (hide) {
  console.debug('checking the hide unavailable techs button');
  $('#hide_unavailable_techs').prop('checked', true);
}

// TODO(ndunn): state should be kept via url params for v1.0
var purchased = parsePurchased();

createTable();

$(purchased).each(function(index, elem) {
  purchase(elem);
});

var selection = null;

// disable purchase button until selection is made
enablePurchase(false);

//http://trends.truliablog.com/vis/tru247/tru247.js?v=1.01



// Hide unavailable technologies
$('#hide_unavailable_techs').change(function() {
  // Going from unclicked to clicked state
  if ($(this)[0].checked) {
    this_.hide = true;
    refresh();
  } else {
    this_.hide = false;
    refresh();
  }
});

$('#purchase').click(function() {
  purchase(this_.selection);
  refresh();
});

function update() {
  console.debug('Update');
}

function refresh() {
  console.debug('Refreshing');
  createTable();
}

function purchase(technology_id) {
  this_.purchased.push(technology_id);
  $('#' + technology_id).addClass('Purchased');
  console.debug('Purchased technologies: ' + this_.purchased);
  refresh();
}

function unselectAll() {
  $('#tech_grid td.tech').each(function(index, elem) {
    $(elem).removeClass('Selected');
  });
}

function enablePurchase(val) {
  $('#purchase').prop('disabled', !val);
}

function parsePurchased() {
  var purchased = getURLParameter('purchased');
  if (purchased != ["null"]) {
    //return purchased.split(',');
    return purchased.split(',');
  } else {
    return [];
  }
}

function hideTechnologies() {
  console.debug('Hide technologies');
  // TODO(ndunn): this should be the other way, or there should be
  // a better way to figure this out.
  $('td.tech').each(function(index, elem) {
    console.debug($(this));
    
    if (!canGet(elem.id)) {
      $(elem).addClass('Unavailable');
    } else {
      $(elem).removeClass('Unavailable');
    }
  });
};

function unhideTechnologies() {
  $('td.tech').each(function(index, elem) {
    $(elem).removeClass('Unavailable'); 
  });
};

// TODO(ndunn): flatten out the different paths
function canGet(technology_id) {
  // TODO(ndunn): fix this  
  tech = this_[technology_id.toUpperCase()];
  if (!tech) {
    alert('mismatch in ' + technology_id);
  }

  // If you already have it, cannot acquire it again
  if (this_.owns(technology_id)) {
    return false;
  }

  // Nothing required, so can automatically get it
  if (tech.dependencies.length == 0) {
    return true;
  }
  // Either an AND or OR of the necessary techs
  
  // Check if you have all of the prereqs
  var numPrereqsMet = 0;
  // By default, only one is necessary...
  var numPrereqs = 1;
  // But sometimes all are necessary
  if (tech.and_dep) {
    numPrereqs = tech.dependencies.length;
  }
  for (var i = 0; i < tech.dependencies.length; i++) {
    for (var j = 0; j < this_.purchased.length; j++) {
      if (tech.dependencies[i].id == this_.purchased[j]) {
        numPrereqsMet++;
      }
    }
  }
  return numPrereqsMet >= numPrereqs;
}


// Returns all paths which could possibly lead to this technology
function calculatePaths(tech, depth) {
  return TECH_PATHS[tech.id];
}

function calculateShortestRemainingPath(tech) {
  if (canGet(tech.id) || owns(tech.id)) {
    return [];
  }
  var all_paths = calculatePaths(tech);
  var shortest_path = undefined;
  for (var i = 0; i < all_paths.length; i++) {
    var candidate_path = [];
    var cur_path = all_paths[i];
    // Add each one we don't own in order
    for (var j = 0; j < cur_path.length; j++) {
      if (!owns(cur_path[j].id)) {
        candidate_path.push(cur_path[j]);
      }
    }
    if (shortest_path == undefined || shortest_path.length > candidate_path.length) {
      shortest_path = candidate_path;
    }
  }
  return shortest_path;
}

// TODO(ndunn): calculate all paths, pick shortest num missing Shortest path
function getMinNumMissingDependencies(tech) {
  return calculateShortestRemainingPath(tech).length;
}


function owns(technology_id) {
  for (var i = 0; i < this_.purchased.length; i++) {
    if (this_.purchased[i] == tech.id) {
      return true;
    }
  }
  return false;
}

// TODO(ndunn): awful awful awful.
// http://stackoverflow.com/questions/1403888/get-url-parameter-with-jquery
function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

function createTechHTML(tech) {
  var name = tech.name;
  var short_desc = tech.short_description;
  var can_acquire = this_.canGet(tech.id);
  var owned = this_.owns(tech.id);
  // TODO(ndunn): Calculate number of missing dependencies
  var num_missing_deps = 0;
  var paths = calculatePaths(tech);
  var path_names = $.map(paths, function(path, i) {
    return $.map(path, function(tech, j) {
      return tech.name;
    });
  });
  
  var icon = '';
  if (owned) {
    icon = 'img/checkbox_checked.png';
  }
  else if (can_acquire) {
    icon = 'img/padlock_open.png';
  }
  else {
    var numRemaining = getMinNumMissingDependencies(tech);
    icon = 'img/padlock_closed_' + numRemaining + '.png';
  }
  return '<img width="36" height="36" src="' + icon + '"/>' + name + '<br/>' + short_desc;
}

function selectedTech() {
  if (!this_.selection) {
    return undefined;
  } else {
    return 
  }
}

// based on http://bl.ocks.org/2605010
function createTable() {
  console.debug('Creating table');
  d3.selectAll('table').remove();

  d3.selectAll('p.fulltext').remove();
  d3.selectAll('#prereqs > ul').remove();
  
  var table = d3.select('#grid').append('table')
    .attr('id', 'tech_grid');
  
  var row = table.selectAll('.row')
    .data(ROW_ORDER)
    .enter().append('tr')
    .attr("class", function(d) { return d[0].type; });
                
  var col = row.selectAll(".cell")
    .data(function (d) { return d; })
    .enter().append('td')
    .attr('class', function(d) { return d.type + ' ' + 'tech'; })
    .attr('id', function(d) { return d.id; })
    .html(createTechHTML)
    .on('mouseover', function() {
      $(this).addClass('Hover');
      // Display all of the immediate dependencies
      //console.debug($(this));
    })
    .on('mouseout', function() {
      $(this).removeClass('Hover');
    });

   $('#tech_grid td.tech').click(function() {
       var clicked = $(this)[0].id;
       if (clicked == this_.selection) {
         this._selection = undefined;
         refresh();
       }
       else {
         this_.selection = $(this)[0].id;
         refresh();
       }
     });


  unselectAll();
  if (this_.selection == undefined) {
    enablePurchase(false);
  } else {
    var canPurchase = canGet(this_.selection);
    enablePurchase(canPurchase);
    $('#' + this_.selection).addClass('Selected');
    
    // Hack - convert from the id string to the real technology.
    var technology = this_[this_.selection.toUpperCase()];
    
    console.debug('selected technology: ' + technology.name);
    // Add text about the selection
    d3.select('#fulltext').selectAll('text_paragraphs')
      .data(technology.full_text.split('\n'))
      .enter()
      .append('p')
      .attr('class', function(d) { return 'fulltext'; })
      .text(function(d) { return d; });
      
    // array of arrays - each array is path to this technology
    d3.select('#prereqs').append('ul').selectAll('prereqs')
      .data(calculatePaths(technology))
      .enter()
      .append('li')
      .text(function(d) { 
        // d is an array of technologies
        var tech_names = $.map(d, function(tech, j) {
          return tech.name;
        });
        return tech_names.join(' -> ');
      })
      .attr('class', 'prereqs');
  }
  
  if (this_.hide) {
    hideTechnologies();
  } else {
    unhideTechnologies();
  }
}
