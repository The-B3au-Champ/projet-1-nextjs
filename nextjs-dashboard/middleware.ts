import { NextResponse } from 'next/server';

export const config = { matcher: '/welcome' };

export async function middleware() {
  // Simuler une réponse sans utiliser Edge Config
  return NextResponse.json({ message: "Hello from middleware!" });
}