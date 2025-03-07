{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  packages = [
    pkgs.bun
    pkgs.biome
    # why gatsby
    pkgs.python312
  ];
}
