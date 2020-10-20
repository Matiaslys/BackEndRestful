# BackEndRestful om træer

# Hvordan kan du hente den som docker image:
Du skal downloade dette git repository.

Dernest skal åbne det i vs code.

Så skal du køre denne kommando i terminalen: docker-compose up

Så har du en container der kører med vores program. Den kører på port 8000. Altså besøg localhost:8000


# Hvordan bruger man vores api som handler om træer
hvis du skriver localhost:8000 får du hele vores json fil.

Man kan også bestemme hvilken slags træ man vil søge efter. Man må bruge 1 søge parameter.
Vi har 4 muligheder: leafcolor, barkcolor, size og alive.

Hvis du skriver dette i url: localhost:8000?leafcolor=pink.  Så får du et træ som har leafcolor pink.

Husk der er kun 3 træer, så kig på localhost:8000 for at se hvilke træer du kan søge efter. 

# Hvordan virker koden.
Du kan besøge vores index.js i routes mappen for at se hvordan den håndtere disse get requests med parametre. Koden er kommenteret.
