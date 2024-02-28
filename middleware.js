export default function middleware() {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
