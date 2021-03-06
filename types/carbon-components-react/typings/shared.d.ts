import * as React from 'react';

export interface ReactAttr<T = HTMLElement> extends React.HTMLAttributes<T> {}
export interface ReactAnchorAttr<T = HTMLAnchorElement> extends React.AnchorHTMLAttributes<T> {}
export interface ReactButtonAttr<T = HTMLButtonElement> extends React.ButtonHTMLAttributes<T> {}
export interface ReactDivAttr extends ReactAttr<HTMLDivElement> {}
export interface ReactInputAttr<T = HTMLInputElement> extends React.InputHTMLAttributes<T> {}
export interface ReactLabelAttr<T = HTMLLabelElement> extends React.LabelHTMLAttributes<T> {}
export interface ReactLIAttr<T = HTMLLIElement> extends React.LiHTMLAttributes<T> {}
export type ReactCreateElementParam = Parameters<typeof React.createElement>[0];

export type ShapeOf<B extends object, E extends object = { [key: string]: any }> = (E extends never ? {} : E) & B;
export type Overwrite<T, U> = [T] extends [never] ? U : Omit<T, keyof U> & U;

export type VerticalDirection = 'bottom' | 'top';
export type HorizontalDirection = 'left' | 'right';
export type Direction = HorizontalDirection | VerticalDirection;
export type ListBoxBaseItemType = object | string;
export type TooltipAlignment = 'center' | 'end' | 'start';
export type TooltipPosition = Direction;
export type CarbonSize = 'lg' | 'sm' | 'xs';
export type CarbonInputSize = 'sm' | 'lg' | 'xl';

//
// In retrospect, it may not always be a good idea to lump shared props into a common reused interface.
// There's no real relation between components that share these types and they could diverge causing painful refactors.
// This approach should probably be left for more complicated types such as those that involve generics.
//

export interface DownshiftTypedProps<ItemType> {
    itemToString?(item: ItemType): string;
}

export interface EmbeddedIconProps {
    iconDescription?: string;
}

export interface EmbeddedTooltipProps {
    tooltipAlignment?: TooltipAlignment;
    tooltipPosition?: TooltipPosition;
}

export interface InternationalProps<MID = string> {
    translateWithId?(messageId: MID): string;
}

export interface MenuOffsetData {
    left?: number;
    top?: number;
}

export interface RenderIconProps {
    renderIcon?: React.ComponentType;
}

export interface RequiresChildrenProps<T = React.ReactNode> {
    children: NonNullable<T>;
}

export interface RequiresIdProps<T = ReactAttr['id']> {
    id: NonNullable<T>;
}

export interface SizingProps {
    small?: boolean;
}

export interface ThemeProps {
    light?: boolean;
}

export interface ValidityProps {
    invalid?: boolean;
    invalidText?: string;
}

export interface SideNavSharedProps {
    isSideNavExpanded?: boolean;
}

export interface SideNavSizingProps {
    large?: boolean;
}

export interface RefForwardingProps<T = HTMLElement> {
    ref?: React.RefObject<T>;
}

// aliases for some React types that it doesn't export directly. They are needed to make sure we match the signatures
// as close as possible
export type FCReturn = ReturnType<React.FC>;
// IMPORTANT: this type matches what react types has but you MUST add children prop to your prop interface or children
// will be an unknown prop. This is typically not the case for a regular function component.
export type ForwardRefReturn<T, P = {}> = React.ForwardRefExoticComponent<
    React.PropsWithoutRef<P> & React.RefAttributes<T>
>;
export type FCProps<P = {}> = Parameters<React.FC<P>>[0];
export type ForwardRefRefType<T> = Parameters<React.ForwardRefRenderFunction<T, unknown>>[1];

export type JSXIntrinsicElementProps<
    K extends keyof JSX.IntrinsicElements,
    REF extends boolean = false
> = REF extends true ? JSX.IntrinsicElements[K] : Omit<JSX.IntrinsicElements[K], 'ref'>;
