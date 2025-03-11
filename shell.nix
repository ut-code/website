{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  packages = [
    pkgs.bun
    pkgs.biome
    # why gatsby
    pkgs.python312
    pkgs.nodejs-slim # required by astro to find sharp
  ];
}
