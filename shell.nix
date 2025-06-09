{
  pkgs ? import <nixpkgs> {},
  internal-helpers ? builtins.getFlake "github:ut-code/internal-helpers"
}:
pkgs.mkShell {
  packages = [
    pkgs.bun
    pkgs.nodejs-slim # required by astro to find sharp
    pkgs.ffmpeg
    pkgs.imagemagick
    internal-helpers.packages.${pkgs.system}.disallow-large-dir
  ];
}
