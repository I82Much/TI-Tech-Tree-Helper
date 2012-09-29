import tech_tree

def main():
  
  print """<?xml-stylesheet type="text/css" href="css/ti.css" ?>
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
	    xmlns:xlink="http://www.w3.org/1999/xlink">"""
  
  rect_template = """<rect class="{svg_class}", width="{width}" height="{height}" x="{x_offset}" y="{y_offset}" rx="{rect_radius_x}" ry="{rect_radius_y}"/>"""
  text_template = """<text x="{x_offset}" y="{y_offset}" fill="{color}">{text}</text>"""
  width = 100
  height = 100
  padding = 15
  rect_radius = 20
  tech_rows = [
    tech_tree.COMBAT_TECHS,
    tech_tree.BIOTECH_TECHS,
    tech_tree.GENERAL_TECHS,
    tech_tree.LOGISTIC_TECHS
  ]

  for i, row in enumerate(tech_rows):
    for j, technology in enumerate(row):
      x_offset = j * (width + padding)
      y_offset = i * (height + padding)
      print rect_template.format(width=width,
                                height=height,
                                x_offset=x_offset,
                                y_offset=y_offset,
                                rect_radius_x=rect_radius,
                                rect_radius_y=rect_radius,
                                svg_class=technology.type.lower())
      print text_template.format(x_offset=x_offset+5,
                                 y_offset=y_offset+height/2,
                                 text=technology.name,
                                 color='black'
                                 
      )
  
  print '</svg>'
if __name__ == '__main__':
  main()
