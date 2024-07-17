globalThis.writeFileAsText = async (fn, str) => Deno.writeFileSync(fn, encoder.encode(str))
