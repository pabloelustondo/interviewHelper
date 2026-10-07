Meeting Helper — Incremental Plan
Working baseline — preserve this first
Microphone → AudioContext → AnalyserNode → 100 ms tick → speech detection → speaking duration → visual signal
Already proven:
- Browser microphone access works.
- Audio level is detected.
- Speaking/not-speaking is detected.
- Speaking duration is measured.
- Manual GOOD / LAND IT / STOP states work.
- Current thresholds: 45 s → LAND IT, 75 s → STOP.
Next increments
1. Turn-boundary validation
   - Stop speaking.
   - Verify silence is detected reliably.
   - Verify the speaking timer resets only after a reasonable pause.
   - Test short natural pauses so they do not accidentally reset the answer.
2. Automatic timing signal
   - <45 s → GOOD
   - 45–75 s → LAND IT
   - ≥75 s → STOP
   - Keep manual buttons as a diagnostic/test harness.
3. Calibrate with real speaking
   - Practice realistic interview answers.
   - Observe false resets and false speech detection.
   - Tune speech threshold, silence interval, 45-second warning, and 75-second limit based on evidence.
4. Speaker identification
   - Current limitation: any sufficiently loud speech can advance the timer.
   - Next goal: distinguish Pablo speaking from interviewer speaking.
   - Do this as a separate experiment rather than complicating the working timer.
5. Transcription
   - Capture speech as text.
   - Preserve conversational turns.
   - Display/debug what the system believes was said.
6. Semantic coaching
   Only after the lower layers work reliably:
   - Am I answering the question?
   - Am I repeating myself?
   - Am I drifting off-topic?
   - Have I already made the important point?
   - Should I land the answer now, even before the timer says so?
Architectural principle
Each increment should remain independently observable and testable:
Hear → detect → time → identify speaker → transcribe → understand → coach
Do not jump directly from microphone input to an AI agent. The simple deterministic layers should remain underneath the intelligent layer.