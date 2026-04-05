export const playClickSound = (): void => {
  try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
          const oscillator = ctx.createOscillator();
              const gainNode = ctx.createGain();

                  oscillator.connect(gainNode);
                      gainNode.connect(ctx.destination);

                          oscillator.type = 'sine';
                              oscillator.frequency.setValueAtTime(600, ctx.currentTime);
                                  oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1);

                                      gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                                          gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

                                              oscillator.start(ctx.currentTime);
                                                  oscillator.stop(ctx.currentTime + 0.1);
                                                    } catch (e) {
                                                        // silently fail if audio not supported
                                                          }
                                                          };
