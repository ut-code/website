{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  packages = [
    pkgs.bun
    pkgs.biome
    pkgs.astro-language-server
    pkgs.nodejs-slim # required by astro to find sharp
  ];
}
