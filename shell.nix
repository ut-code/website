{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  packages = [
    pkgs.bun
    pkgs.nodejs-slim # required by astro to find sharp
    pkgs.ffmpeg
    pkgs.imagemagick
  ];
}
