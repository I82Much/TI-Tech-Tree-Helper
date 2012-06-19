from xml.sax.saxutils import escape
from collections import defaultdict
# Original topological sort code written by Ofer Faigon (www.bitformation.com) and used with permission

def topological_sort(items, partial_order):
    """Perform topological sort.
       items is a list of items to be sorted.
       partial_order is a list of pairs. If pair (a,b) is in it, it means
       that item a should appear before item b.
       Returns a list of the items in one of the possible orders, or None
       if partial_order contains a loop.
    """

    def add_node(graph, node):
        """Add a node to the graph if not already exists."""
        if not graph.has_key(node):
            graph[node] = [0] # 0 = number of arcs coming into this node.

    def add_arc(graph, fromnode, tonode):
        """Add an arc to a graph. Can create multiple arcs.
           The end nodes must already exist."""
        graph[fromnode].append(tonode)
        # Update the count of incoming arcs in tonode.
        graph[tonode][0] = graph[tonode][0] + 1

    # step 1 - create a directed graph with an arc a->b for each input
    # pair (a,b).
    # The graph is represented by a dictionary. The dictionary contains
    # a pair item:list for each node in the graph. /item/ is the value
    # of the node. /list/'s 1st item is the count of incoming arcs, and
    # the rest are the destinations of the outgoing arcs. For example:
    #           {'a':[0,'b','c'], 'b':[1], 'c':[1]}
    # represents the graph:   c <-- a --> b
    # The graph may contain loops and multiple arcs.
    # Note that our representation does not contain reference loops to
    # cause GC problems even when the represented graph contains loops,
    # because we keep the node names rather than references to the nodes.
    graph = {}
    for v in items:
        add_node(graph, v)
    for a,b in partial_order:
        add_arc(graph, a, b)

    # Step 2 - find all roots (nodes with zero incoming arcs).
    roots = [node for (node,nodeinfo) in graph.items() if nodeinfo[0] == 0]

    # step 3 - repeatedly emit a root and remove it from the graph. Removing
    # a node may convert some of the node's direct children into roots.
    # Whenever that happens, we append the new roots to the list of
    # current roots.
    sorted = []
    while len(roots) != 0:
        # If len(roots) is always 1 when we get here, it means that
        # the input describes a complete ordering and there is only
        # one possible output.
        # When len(roots) > 1, we can choose any root to send to the
        # output; this freedom represents the multiple complete orderings
        # that satisfy the input restrictions. We arbitrarily take one of
        # the roots using pop(). Note that for the algorithm to be efficient,
        # this operation must be done in O(1) time.
        root = roots.pop()
        sorted.append(root)
        for child in graph[root][1:]:
            graph[child][0] = graph[child][0] - 1
            if graph[child][0] == 0:
                roots.append(child)
        del graph[root]
    if len(graph.items()) != 0:
        # There is a loop in the input.
        return None
    return sorted


def main():
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
  
  tech_type_map = {
  # Biotech
  'Stasis Capsules': 'Biotech',
  'Neural Motivator': 'Biotech',
  'Dacxive Animators': 'Biotech',
  'Cybernetics': 'Biotech',
  'Gen Synthesis': 'Biotech',
  'X-89 Bacterial Weapon': 'Biotech',
  # Combat
  'Hylar V Assault Laser': 'Combat',
  'Deep Space Cannon': 'Combat',
  'War Sun': 'Combat',
  'Magen Defense Grid': 'Combat',
  'Assault Cannon': 'Combat',
  'Graviton Negator': 'Combat',
  #  General
  'Enviro Compensator': 'General',
  'Sarween Tools': 'General',
  'Micro Technology': 'General',
  'Integrated Economy': 'General',
  'Transit Diodes': 'General',
  'Graviton Laser System': 'General',
  # Logistics
  'Antimass Deflectors': 'Logistics',
  'XRD Transporters': 'Logistics',
  'Type IV Drive': 'Logistics',
  'Advanced Fighters': 'Logistics',
  'Light/Wave Deflectors': 'Logistics',
  'Fleet Logistics': 'Logistics'
  }
  
  
  keys = dependencies.keys()
  # TODO(ndunn): Handle distinction between AND and OR
  partial_order = []
  
  
  for key, values in dependencies.items():
    if values:
      # TODO(ndunn): Find a better hack
      all_req = values[0] == True
      # All are required
      if all_req:
        for dep in values[1:]:
          partial_order.append((dep, key))
      # Any of these are required
      else:
        for dep in values:
          partial_order.append((dep, key))
  print partial_order
  
  topo_order = topological_sort(keys, partial_order)
  
  # TODO need to expand the dependencies to include dependencies of their children
  num_deps = defaultdict(lambda:0)
  for tech in topo_order:
    dependent_techs = dependencies[tech]
    if dependent_techs:
      # All
      # TODO(ndunn): doesn't take into account if two techs depend on same one.  Overcounting
      if True == dependent_techs[0]:
        for dep_tech in dependent_techs[1:]:
          num_deps[tech] += 1 + num_deps[dep_tech]
      else:
        # Cheapest technology path
        min_cost = min([1 + num_deps[dep_tech] for dep_tech in dependent_techs])
        num_deps[tech] += min_cost

  print num_deps

  for tech_type in ['Biotech', 'Combat', 'General', 'Logistics']:
    print tech_type
    for tech in topo_order:
      if tech_type_map[tech] == tech_type:
        num_tech_prereqs = num_deps[tech]
        print '._%d %s' %(num_tech_prereqs, tech)
  
  
  # Grid
  grid_tmpl = """
  <control controlID="{id}" controlTypeID="com.balsamiq.mockups::TextInput" x="{x}" y="{y}" w="{w}" h="{h}" measuredW="150" measuredH="100" zOrder="2" locked="false" isInGroup="-1">
      <controlProperties>
        <text>{text}</text>
      </controlProperties>
    </control>
  """
  width = 100
  height= 100
  x_offset = 2 * width
  y_offset = 2 * height
  identifier = 0
  for index, tech_type in enumerate(['Biotech', 'Combat', 'General', 'Logistics']):
    row = index
    col = 0
    for tech in topo_order:
      if tech_type_map[tech] == tech_type:
        identifier += 1
        
        x = x_offset + col * 100
        y = y_offset + row * height
        w = width
        h = height

        text = tech.replace(' ', '%20')
        #print text
        print grid_tmpl.format(x=x, y=y, w=w, h=h, text=text, id=identifier)
        
        col += 1
    
  
  pass
  
if __name__ == '__main__':
  main()