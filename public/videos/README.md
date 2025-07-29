# Hero Background Videos

This directory contains background videos for the Hero section slides.

## Required Files

- `security-demo.mp4` - Background video for security demonstration slides

## Video Specifications

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD) or higher
- **Frame Rate**: 24-30 fps
- **Duration**: 10-30 seconds (looping)
- **File Size**: Optimize for web (under 10MB recommended)
- **Content**: Abstract, subtle animations or security-themed content
- **Audio**: No audio (muted background videos)

## Usage

These videos are referenced in the slide data files and used as background videos for the Hero section slides. The videos should be placed in the `/public/videos/` directory and referenced with paths like `/videos/filename.mp4`.

## Video Link URLs

For video links (YouTube, Vimeo, etc.), use the full URL in the slide data:

```typescript
videoLink: {
  src: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  poster: "/images/video-poster1.jpg",
  alt: "Video description"
}
``` 