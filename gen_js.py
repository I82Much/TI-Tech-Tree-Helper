import tech_tree

def MakeConstant(tech):
  return tech.replace(' ', '_').replace('-', '_').replace('/', '_').upper()

def main():
  js_template = """
  var {var_name} = {{
    name: "{name}",
    type: "{type}",
    short_description: "{short_description}",
    full_text: "{full_text}",
    and_dep: {and_dep},
    dependencies: {dependencies}
  }};"""
  for tech in tech_tree.TOPOLOGICAL_ORDER:
    print js_template.format(
      var_name=MakeConstant(tech.name),
      name=tech.name,
      type=tech.type,
      short_description=tech.short_description,
      full_text=tech.full_text,
      and_dep=str(tech.dependencies.all_necessary).lower(),
      dependencies='[' + ', '.join([MakeConstant(x.name) for x in tech.dependencies.technologies]) + ']'
    )
  
  def constant(t):
    return MakeConstant(t.name)
  print 'var COMBAT_TECHS = [' + ', '.join(map(constant, tech_tree.COMBAT_TECHS)) + '];'
  print 'var BIOTECH_TECHS = [' + ', '.join(map(constant, tech_tree.BIOTECH_TECHS)) + '];'
  print 'var GENERAL_TECHS = [' + ', '.join(map(constant, tech_tree.GENERAL_TECHS)) + '];'
  print 'var LOGISTIC_TECHS = [' + ', '.join(map(constant, tech_tree.LOGISTIC_TECHS)) + '];'

if __name__ == '__main__':
  main()