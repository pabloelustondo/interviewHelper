# Slide 5 — Screen layout

**Visual:** [slide.svg](./slide.svg) (mockup shown in the LAND IT state)

- **Main panel:** full-screen colored div (`#panel`) with big centered text. This is the only thing you need to look at.
- **Debug display (top-left):** mic status, speaking / not speaking, current turn duration, and current audio level. Used for calibration.
- **Controls (bottom-right):** Start Listening, plus manual Good / Land it / Stop buttons kept as a test harness.
- While listening, the microphone overrides manual button choices on the next 100 ms tick.
