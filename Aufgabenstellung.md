# Aufgabenbeschreibung - Programmentwurf 'Grundlagen Computergrafik' - TIT13

Der Begriff Augmented Reality beschreibt das Rendern einer Computergenerierten Grafik oder Szene in das Live-Bild einer Kamera.
Sie findet vorallem in der Entwickling von Daten-Brillen Gebrauch, da diese zusätzliche Informationen in das Sichtfeld des Trägers projezieren sollen.
Somit wird Thematik der Augmented Reality im Bereich der Computergrafik immer wichtiger.
Im einfachsten Fall wird dabei über ein Marker das Koordinatensystem der Umgebung bestimmt um damit eine Grafik in die Welt zu Rendern.

In diesem Progrmamentwurf sollen Sie nun ein vorhandenes Automodell über einen solchen Marker in den Live-Strom der Kamera oder des beigefügt Videos rendern.
Das mitgelieferte Framework übernimmt dabei die erkennung des Markers und liefert das entsprechende Koordinatensystem zurück.
Nutzen Sie dies um die folgenden Aufgaben mittels WebGL und THREE.js zu lösen.
Passen sie dabei die Datei 'basic.html' an.

## Aufgabenstellung

1. Fügen Sie das Modell korrekt aus den Einzelteilen zusammen und platzieren Sie es in der Mitte des von dem Framework gelieferten Koordinatensystems. <b>(5 Punkte)</b>

	1a. Die "Einzelmodelle" des Gesamtmodells finden Sie im Ordner "models". Fügen Sie diese so zur Szene hinzu, dass diese ein Fahrzeug (Camaro) ergeben. Als Refernzobjekt für alle Teilmodelle dient hierbei "markerSceneObj" um die Marker-Transformation direkt mit dem Fahrzeugmodell zu synchronisieren. Stellen Sie sicher, dass sich das Modell je nach Ansicht mit dem Koordinatensystem mitbewegt.

	1b. Das gesamte Modell sollte vor dem starten der Markerdetektion und des markerbasierten Renderings geladen werden. Eine Fortschrittsanzeige soll hierbei Auskunft über die Menge der bereits geladenen Daten (in Prozent) des Gesamtmodells geben.

2. Implementieren Sie für die Oberfläche des Modells das Lambertsche, sowie das Phong-Beleuchtungsmodell über die Klasse 'ShaderMaterial' und ermöglichen Sie es dem Benutzer zwischen den beiden Modellen zu wechseln. <b>(5 Punkte)</b>

	2a. Rendern sie die Oberflächen der Fenster mit Transparenz (Alpha-Wert < 1.0) um einen entsprechend durchsichtigen Eindruck zu erhalten.

3. Realisieren Sie eine Explosionsansicht, bei der sich die Einzelteile des Modells bei Knopfdruck in Konzentrischer Richtung von einander entfernen. Die Bewegung der Einzelteile soll dabei flüssig animiert werden. Ermöglichen Sie auch wieder das Zusammenschließen der Einzelteile zu dem ursprünglichen Modell. <b>(5 Punkte)</b>

4. "Stellen" Sie drei Würfel mit verschiedenen Farben neben das Modell. Der Benutzer soll die Möglichkeit haben, zunächst die Farbe auswählen zu und dann ein Einzelteil des Modells mit dieser Farbe einzufärben.
Die Farbwürfel sollen sich entsprechend mit dem Modell je nach Ansicht rotieren / bewegen. Die Selektierung einer Farbe soll durch Tap auf den Bildschirm (Smartphone) bzw. Klick auf das gerenderte Frame erfolgen. Gleiches gilt für das selektieren des zu färbenden Objektes der Szene. Hierzu muss mittels der Mauszeiger-Position das 3D-Objekt bestimmt werden, dass mit der geringsten Entfernung zum Screen gerendert wurde. <b>(5 Punkte)</b>

5. Fügen Sie mindestens eine Lichtquelle hinzu. Lassen Sie die Lichtquelle(n) um das Modell bewegen und ermöglichen Sie dem Benutzer die Farben der Lichtquellen zu beeinflussen. <b>(5 Punkte)</b>

## Abgabe

- Abgabe bis <b>Sonntag, den 17. Juli 2016 um 23:59</b>

## Bearbeitung und Notenvergabe

- Der Programmentwurf soll in kleinen Gruppen von 3 Studenten bearbeitet werden.

- Geben Sie eine den fertigen Programmentwurf in Form eines Archives zusammen mit allen Abhängigkeiten ab, sodass wir das Programm direkt ausführen können.

- Legen Sie bei der Abgabe eine Text-Datei mit den Namen der Studenten, die an dem programmentwurf gearbeitet haben, in das Archiv.

- Helfen Sie sich Gegenseitig (vorallem zwischen dein einzelnen Gruppen) ins Besondere wenn Schwierigkeiten auftreten.
Nutzen Sie zur Hilfestellung die in den Vorlesungsfolien referenzierte Literatur und die verfügaren Beispiele.
Es darf jedoch kein Code direkt dupliziert und in einem Ihrem oder einem anderen Programmentwurf eingefügt werden.

<b>VIEL ERFOLG!</b>
