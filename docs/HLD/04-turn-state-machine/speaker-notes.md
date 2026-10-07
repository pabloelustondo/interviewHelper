# Slide 4 — Turn state machine

**Visual:** [slide.puml](./slide.puml)

- There are two layers: whether a turn is in progress, and which color the elapsed time maps to.
- Idle always shows green GOOD with a zero timer.
- The first detected voice starts a turn; the color then advances only with elapsed time: 45 s → LAND IT, 75 s → STOP.
- Only 2.5 s of continuous silence ends the turn and snaps the display back to green.
- The color never goes backwards during a turn, even during short pauses.
