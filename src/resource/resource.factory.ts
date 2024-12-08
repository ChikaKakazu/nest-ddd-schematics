import { apply, Rule, SchematicContext, Tree, url, template, move, chain, mergeWith } from "@angular-devkit/schematics";
import { ResourceOptions } from "./resource.schema";
import { strings } from "@angular-devkit/core";

export function main(options: ResourceOptions): Rule {
  console.log('Options:', options);
    return (tree: Tree, _context: SchematicContext) => {
      const templateSource = apply(url('./files'), [
        template({
          ...strings,
          ...options,
        }),
        move('.'), // プロジェクトのルートからのパスを指定
      ]);
  
      return chain([
        mergeWith(templateSource),
      ]);
    };
  }