# Slide 3 — Speech detection

**Visual:** [slide.puml](./slide.puml)

- "Speaking" is a volume test: RMS level above 0.02 counts as voice.
- A 300 ms hold keeps the "speaking" indicator from flickering between syllables.
- The first loud tick starts the turn timer. Later loud ticks only refresh `lastVoice`.
- If no voice is heard for 2.5 s, the turn ends and the timer resets to zero.
- Short natural pauses (under 2.5 s) do not reset the answer.
- All three numbers are constants at the top of `app.js` and are meant to be tuned with real speech.
