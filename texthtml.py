import sys

def idfy_string(string):
    string = string.lower().replace(' ', '-')
    return string


with open(sys.argv[1], "rt") as file:
    original = file.read().splitlines()

formatted = ""
index = "<div class=\"indice\">\n"
current_title = ""
for string in original:
    if string == '': #br
        formatted += "<br>\n"
    elif string.startswith("## "): #section
        string = string.replace('## ', '')
        index += f"\t\t<div><a href=\"#{current_title}-{idfy_string(string)}\">{string}</a></div>\n"
        formatted += f"<p id=\"#{current_title}-{idfy_string(string)}\" class=\"section\">{string}</p>\n"
    elif string.startswith("# "): #title
        string = string.replace('# ', '')
        current_title = idfy_string(string)
        index += f"\t<div><a href=\"#{current_title}\">{string}</a></div>\n"
        formatted += f"<br><hr><br>\n<p id=\"#{current_title}\" class=\"title\">{string}</p>\n"
    elif string.startswith("~ "): #author
        string = string.replace('~ ', '')
        formatted += f"<p class=\"author\">{string}</p>\n"
    else:
        formatted += f"<p>{string}</p>\n"

with open(f"{sys.argv[1]}.html", "w") as file:
    file.write(index)
    file.write('\n')
    file.write(formatted)


