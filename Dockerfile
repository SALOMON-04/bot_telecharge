FROM node:22-bookworm-slim

# ffmpeg (assemblage) et curl (pour récupérer yt-dlp)
RUN apt-get update && apt-get install -y --no-install-recommends ffmpeg curl ca-certificates openssl \
    && rm -rf /var/lib/apt/lists/*

# yt-dlp en version autonome
RUN curl -fL https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_linux -o /usr/local/bin/yt-dlp \
    && chmod a+rx /usr/local/bin/yt-dlp
    
# bun, pour garder ton installation actuelle
RUN npm install -g bun

WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --ignore-scripts
COPY . .
RUN bunx prisma generate && bun run build

CMD ["node", "dist/src/main.js"]