# Slide 2 — Pipeline

**Visual:** [slide.puml](./slide.puml)

- The user clicks **Start Listening**; the browser asks for microphone permission.
- The stream feeds a Web Audio `AudioContext` and an `AnalyserNode`.
- Every 100 ms we read raw samples and compute the RMS volume.
- Detection turns volume into speaking / not speaking; the timer turns that into seconds in the current turn.
- The UI maps seconds to GOOD / LAND IT / STOP and updates the debug box.
- Each stage is simple and deterministic, so each can be observed and tested on its own.
