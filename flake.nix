{
  description = "ut.code(); website development flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    internal-helpers = {
      url = "github:ut-code/internal-helpers";
      inputs.nixpkgs.url = "nixpkgs";
    };
  };

  outputs = {
    nixpkgs,
    flake-utils,
    internal-helpers,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      devShells.default = pkgs.callPackage ./shell.nix {
        inherit internal-helpers;
      };
    });
}
