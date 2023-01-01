async function apiAuth({request, next, env}) {
  const authHeader = request.headers.get('Authorization')
  if (authHeader && 