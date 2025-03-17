{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  packages = [
    pkgs.bun
    pkgs.biome
    pkgs.nodejs-slim # required by astro to find sharp
  ];
}
