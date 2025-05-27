import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export' // Add this line for static exports
};

export default withNextVideo(nextConfig);