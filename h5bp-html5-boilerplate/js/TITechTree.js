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

var this_ = this;

createTable();

// TODO(ndunn): state should be kept via url params for v1.0
var purchased = parsePurchased();
$(purchased).each(function(index, elem) {
  purchase(elem);
});


var selection = null;
var hide = getURLParameter('hide') == ['true'];
if (hide) {
  console.debug('checking the hide unavailable techs button');
  $('#hide_unavailable_techs').prop('checked', true);
  hideTechnologies();
}

// disable purchase button until selection is made
enablePurchase(false);

//http://trends.truliablog.com/vis/tru247/tru247.js?v=1.01

// Hover listener for the table
$('#tech_grid td.tech').hover(function() {
    $(this).addClass('Hover');
    // Display all of the immediate dependencies
    //console.debug($(this));
	}, function() {
	  $(this).removeClass('Hover');
	});

$('#tech_grid td.tech').click(function() {
  var clicked = $(this)[0].id;
  if (clicked == this_.selection) {
    unselectAll();
    this_.selection = null;
    enablePurchase(false);
    return;
  }
  else {
    unselectAll();
    this_.selection = $(this)[0].id;
    // New selection is made; see if we can purchase it
    var canPurchase = canGet(this_.selection);
    enablePurchase(canPurchase);
  
    $(this).addClass('Selected');
  }
});

// Hide unavailable technologies
$('#hide_unavailable_techs').change(function() {
  // Going from unclicked to clicked state
  if ($(this)[0].checked) {
    this_.hide = true;
    hideTechnologies();
  } else {
    this_.hide = false;
    unhideTechnologies();
  }
});

$('#purchase').click(function() {
  unselectAll();
  purchase(this_.selection);
});

function refresh() {
  console.debug('Refreshing');
  console.debug('Hidden: ' + this_.hide);
  if (this_.hide) {
    hideTechnologies();
  }
}

function purchase(technology) {
  this_.purchased.push(technology);
  $('#' + technology).addClass('Purchased');
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
  for (var i = 0; i < this_.purchased.length; i++) {
    if (this_.purchased[i] == tech.id) {
      console.debug('Already own ' + tech.id);
      return false;
    }
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

// TODO(ndunn): awful awful awful.
// http://stackoverflow.com/questions/1403888/get-url-parameter-with-jquery
function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

function createTable() {
  var html = '<table id="tech_grid" class="front" cellspacing="10">';

  for (r = 0; r < ROW_ORDER.length; r++) {
    row = ROW_ORDER[r];
    tech_type = row[0].type;

    html += '<tr class="' + tech_type + '">\n'
    html += '  <td class="' + tech_type + '">' + tech_type + '</td>\n'
    for (i = 0; i < row.length; i++) {
      var tech = row[i];
      html += '  <td class="' + tech_type + ' tech" id="' + tech.id + '">' + tech.name + '<br/>' + tech.short_description + '</td>\n'
    }
    html += '</tr>\n'
  }
	html += '</table>';
	console.debug(html);
	d3.select('#grid').html(html);
}
