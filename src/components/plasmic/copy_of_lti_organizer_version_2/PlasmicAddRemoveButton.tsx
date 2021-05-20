// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4smDGpnAjxXprAJJNMsm4F
// Component: Jken9iMDI9nE3
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_lti_organizer_version_2.module.css"; // plasmic-import: 4smDGpnAjxXprAJJNMsm4F/projectcss
import * as sty from "./PlasmicAddRemoveButton.module.css"; // plasmic-import: Jken9iMDI9nE3/css

export type PlasmicAddRemoveButton__VariantMembers = {
  removeToolFromSite: "removeToolFromSite";
};

export type PlasmicAddRemoveButton__VariantsArgs = {
  removeToolFromSite?: SingleBooleanChoiceArg<"removeToolFromSite">;
};

type VariantPropType = keyof PlasmicAddRemoveButton__VariantsArgs;
export const PlasmicAddRemoveButton__VariantProps = new Array<VariantPropType>(
  "removeToolFromSite"
);

export type PlasmicAddRemoveButton__ArgsType = {};
type ArgPropType = keyof PlasmicAddRemoveButton__ArgsType;
export const PlasmicAddRemoveButton__ArgProps = new Array<ArgPropType>();

export type PlasmicAddRemoveButton__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultAddRemoveButtonProps {
  removeToolFromSite?: SingleBooleanChoiceArg<"removeToolFromSite">;
  className?: string;
}

function PlasmicAddRemoveButton__RenderFunc(props: {
  variants: PlasmicAddRemoveButton__VariantsArgs;
  args: PlasmicAddRemoveButton__ArgsType;
  overrides: PlasmicAddRemoveButton__OverridesType;
  dataFetches?: PlasmicAddRemoveButton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const [isRootActive, triggerRootActiveProps] = useTrigger("usePressed", {});
  const triggers = {
    active_root: isRootActive
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        defaultcss.__wab_text,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root__removeToolFromSite]: hasVariant(
            variants,
            "removeToolFromSite",
            "removeToolFromSite"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerRootActiveProps]}
    >
      {hasVariant(variants, "removeToolFromSite", "removeToolFromSite") &&
      triggers.active_root
        ? "Add Tool to Site"
        : triggers.active_root
        ? "Remove Tool "
        : hasVariant(variants, "removeToolFromSite", "removeToolFromSite")
        ? "Remove Tool "
        : "Add Tool to Site"}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAddRemoveButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAddRemoveButton__VariantsArgs;
    args?: PlasmicAddRemoveButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAddRemoveButton__Fetches;
  } & Omit<PlasmicAddRemoveButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAddRemoveButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAddRemoveButton__ArgProps,
      internalVariantPropNames: PlasmicAddRemoveButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicAddRemoveButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAddRemoveButton";
  } else {
    func.displayName = `PlasmicAddRemoveButton.${nodeName}`;
  }
  return func;
}

export const PlasmicAddRemoveButton = Object.assign(
  // Top-level PlasmicAddRemoveButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicAddRemoveButton
    internalVariantProps: PlasmicAddRemoveButton__VariantProps,
    internalArgProps: PlasmicAddRemoveButton__ArgProps
  }
);

export default PlasmicAddRemoveButton;
/* prettier-ignore-end */