export const alignContent = [
  'content-start',
  'content-center',
  'content-end',
  'content-between',
  'content-around',
  'content-evenly',
];

export const alignItems = [
  'items-stretch',
  'items-start',
  'items-center',
  'items-end',
];

export const alignSelf = [
  'self-auto',
  'self-start',
  'self-center',
  'self-end',
  'self-stretch',
];

export const animation = ['animate-inprogress', 'animate-spinner'];

export const appearance = ['appearance-none'];

export const backdropBlur = [
  'backdrop-blur-none',
  'backdrop-blur',
  'backdrop-blur-s',
  'backdrop-blur-m',
  'backdrop-blur-l',
  'backdrop-blur-xl',
  'backdrop-blur-xxl',
  'backdrop-blur-xxxl'
];

export const backgroundAttachment = [
  'bg-fixed',
  'bg-local',
  'bg-scroll',
];

export const backgroundClip = [
  'bg-clip-border',
  'bg-clip-padding',
  'bg-clip-content',
  'bg-clip-text',
];

export const backgroundColor = [
  'bg-inherit',
  'bg-current',
  'bg-transparent',
  's-bg',
  's-bg-hover',
  's-bg-active',
  's-bg-selected',
  's-bg-selected-hover',
  's-bg-disabled',
  's-bg-inverted',
  's-bg-subtle',
  's-bg-subtle-hover',
  's-bg-subtle-active',
  's-bg-primary',
  's-bg-primary-hover',
  's-bg-primary-active',
  's-bg-primary-subtle',
  's-bg-primary-subtle-hover',
  's-bg-primary-subtle-active',
  's-bg-secondary',
  's-bg-secondary-hover',
  's-bg-secondary-active',
  's-bg-positive',
  's-bg-positive-hover',
  's-bg-positive-active',
  's-bg-positive-selected',
  's-bg-positive-selected-hover',
  's-bg-positive-subtle',
  's-bg-positive-subtle-hover',
  's-bg-positive-subtle-active',
  's-bg-negative',
  's-bg-negative-hover',
  's-bg-negative-active',
  's-bg-negative-selected',
  's-bg-negative-selected-hover',
  's-bg-negative-subtle',
  's-bg-negative-subtle-hover',
  's-bg-negative-subtle-active',
  's-bg-warning',
  's-bg-warning-hover',
  's-bg-warning-active',
  's-bg-warning-selected',
  's-bg-warning-selected-hover',
  's-bg-warning-subtle',
  's-bg-warning-subtle-hover',
  's-bg-warning-subtle-active',
  's-bg-info',
  's-bg-info-hover',
  's-bg-info-active',
  's-bg-info-selected',
  's-bg-info-selected-hover',
  's-bg-info-subtle',
  's-bg-info-subtle-hover',
  's-bg-info-subtle-active',
  's-bg-notification',
];

export const backgroundOrigin = [
  'bg-origin-border',
  'bg-origin-padding',
  'bg-origin-content',
];

export const backgroundPosition = [
  'bg-bottom',
  'bg-center',
  'bg-left',
  'bg-left-bottom',
  'bg-left-top',
  'bg-right',
  'bg-right-bottom',
  'bg-right-top',
  'bg-top',
];

export const backgroundRepeat = [
  'bg-repeat',
  'bg-no-repeat',
  'bg-repeat-x',
  'bg-repeat-y',
  'bg-repeat-round',
  'bg-repeat-space',
];

export const backgroundSize = ['bg-auto', 'bg-cover', 'bg-contain'];

export const backgroundImage = ['bg-none', 'bg-[url({url})]', 'bg-[url(var(--any-css-variable))]'];

export const borderCollapse = ['border-collapse', 'border-separate'];

export const borderColor = [
  'border-inherit',
  'border-current',
  'border-transparent',
  's-border',
  's-border-hover',
  's-border-active',
  's-border-disabled',
  's-border-selected',
  's-border-selected-hover',
  's-border-inverted',
  's-border-focused',
  's-border-primary',
  's-border-primary-hover',
  's-border-primary-active',
  's-border-primary-subtle',
  's-border-primary-subtle-hover',
  's-border-primary-subtle-active',
  's-border-secondary',
  's-border-secondary-hover',
  's-border-secondary-active',
  's-border-positive',
  's-border-positive-hover',
  's-border-positive-active',
  's-border-positive-subtle',
  's-border-positive-subtle-hover',
  's-border-positive-subtle-active',
  's-border-negative',
  's-border-negative-hover',
  's-border-negative-active',
  's-border-negative-selected',
  's-border-negative-selected-hover',
  's-border-negative-subtle',
  's-border-negative-subtle-hover',
  's-border-negative-subtle-active',
  's-border-warning',
  's-border-warning-hover',
  's-border-warning-active',
  's-border-warning-subtle',
  's-border-warning-subtle-hover',
  's-border-warning-subtle-active',
  's-border-info',
  's-border-info-hover',
  's-border-info-active',
  's-border-info-subtle',
  's-border-info-subtle-hover',
  's-border-info-subtle-active',
];

export const outlineColor = borderColor.map(c => c.replace('border', 'outline'))

export const divideColor = borderColor.map(c => c.replace('border', 'divide'))

export const borderStyle = [
  'border-solid',
  'border-dashed',
  'border-dotted',
  'border-double',
  'border-hidden',
  'border-none',
  'border-groove',
  'border-ridge',
  'border-inset',
  'border-outset',
];

export const boxShadow = [
  'shadow-s',
  'shadow-m',
  'shadow-l',
  'shadow-xl',
];

export const breakAfter = [
  'break-after-auto',
  'break-after-avoid',
  'break-after-all',
  'break-after-avoid-page',
  'break-after-page',
  'break-after-left',
  'break-after-right',
  'break-after-column',
];

export const breakBefore = [
  'break-before-auto',
  'break-before-avoid',
  'break-before-all',
  'break-before-avoid-page',
  'break-before-page',
  'break-before-left',
  'break-before-right',
  'break-before-column',
];

export const breakInside = [
  'break-inside-auto',
  'break-inside-avoid',
  'break-inside-avoid-page',
  'break-inside-avoid-column',
];

export const boxSizing = ['box-border', 'box-content'];

export const clear = [
  'clear-left',
  'clear-right',
  'clear-both',
  'clear-none',
];

export const caretColor = [
  'caret',
  'caret-current',
  'caret-inherit',
  'caret-transparent',
];

export const cursor = [
  'cursor-auto',
  'cursor-default',
  'cursor-pointer',
  'cursor-wait',
  'cursor-text',
  'cursor-move',
  'cursor-help',
  'cursor-not-allowed',
  'cursor-none',
  'cursor-context-menu',
  'cursor-progress',
  'cursor-cell',
  'cursor-crosshair',
  'cursor-vertical-text',
  'cursor-alias',
  'cursor-copy',
  'cursor-no-drop',
  'cursor-grab',
  'cursor-grabbing',
  'cursor-all-scroll',
  'cursor-col-resize',
  'cursor-row-resize',
  'cursor-n-resize',
  'cursor-e-resize',
  'cursor-s-resize',
  'cursor-w-resize',
  'cursor-ne-resize',
  'cursor-nw-resize',
  'cursor-se-resize',
  'cursor-sw-resize',
  'cursor-ew-resize',
  'cursor-ns-resize',
  'cursor-nesw-resize',
  'cursor-nwse-resize',
  'cursor-zoom-in',
  'cursor-zoom-out',
];

export const display = [
  'hidden',
  'block',
  'inline-block',
  'inline',
  'flex',
  'inline-flex',
  'table',
  'inline-table',
  'table-caption',
  'table-cell',
  'table-column',
  'table-column-group',
  'table-footer-group',
  'table-header-group',
  'table-row-group',
  'table-row',
  'flow-root',
  'grid',
  'inline-grid',
  'contents',
  'list-item',
];

export const flex = [
  'flex-initial',
  'flex-1',
  'flex-auto',
  'flex-none',
];

export const flexDirection = [
  'flex-row',
  'flex-row-reverse',
  'flex-col',
  'flex-col-reverse',
];

export const flexGrow = ['grow', 'grow-0'];

export const flexShrink = ['shrink', 'shrink-0'];

export const flexWrap = [
  'flex-nowrap',
  'flex-wrap',
  'flex-wrap-reverse',
];

export const floats = ['float-right', 'float-left', 'float-none'];

export const fontSize = [
  'text-detail',
  'text-caption',
  'text-body',
  'text-preamble',
  'text-display',
  't6',
  't5',
  't4',
  't3',
  't2',
  't1',
  'text-xs',
  'text-s',
  'text-m',
  'text-ml',
  'text-l',
  'text-xl',
  'text-xxl',
  'text-xxxl',
];

export const fontStyle = ['italic', 'not-italic'];

export const fontVariantNumeric = [
  'normal-nums',
  'tabular-nums',
  'ordinal',
  'slashed-zero',
  'lining-nums',
  'oldstyle-nums',
  'proportional-nums',
];

export const gridAutoFlow = [
  'grid-flow-row',
  'grid-flow-col',
  'grid-flow-dense',
  'grid-flow-row-dense',
  'grid-flow-col-dense',
];

export const gridAutoColumns = [
  'auto-cols-auto',
  'auto-cols-min',
  'auto-cols-max',
  'auto-cols-fr',
];

export const gridAutoRows = [
  'auto-rows-auto',
  'auto-rows-min',
  'auto-rows-max',
  'auto-rows-fr',
];

export const iconColor = [
  's-icon',
  's-icon-hover',
  's-icon-active',
  's-icon-selected',
  's-icon-selected-hover',
  's-icon-disabled',
  's-icon-subtle',
  's-icon-subtle-hover',
  's-icon-subtle-active',
  's-icon-inverted',
  's-icon-inverted-hover',
  's-icon-inverted-active',
  's-icon-primary',
  's-icon-secondary',
  's-icon-secondary-hover',
  's-icon-secondary-active',
  's-icon-positive',
  's-icon-negative',
  's-icon-warning',
  's-icon-info',
];

export const isolate = ['isolate', 'isolation-auto'];

export const justifyContent = [
  'justify-start',
  'justify-center',
  'justify-end',
  'justify-between',
  'justify-around',
  'justify-evenly',
];

export const justifyItems = [
  'justify-items-start',
  'justify-items-center',
  'justify-items-end',
  'justify-items-stretch',
];

export const justifySelf = [
  'justify-self-auto',
  'justify-self-start',
  'justify-self-center',
  'justify-self-end',
  'justify-self-stretch',
];

export const lineHeight = [
  'leading-xs',
  'leading-s',
  'leading-m',
  'leading-ml',
  'leading-l',
  'leading-xl',
  'leading-xxl',
  'leading-xxxl',
];

export const listStylePosition = [
  'list-inside',
  'list-outside',
];

export const listStyleType = [
  'list-none',
  'list-disc',
  'list-decimal',
];

export const minWidth = [
  'min-w-0',
  'min-w-full',
  'min-w-min',
  'min-w-max',
  'min-w-fit',
];

export const minHeight = [
  'min-h-0',
  'min-h-full',
  'min-h-min',
  'min-h-max',
  'min-h-fit',
];

export const objectFit = [
  'object-contain',
  'object-cover',
  'object-fill',
  'object-none',
  'object-scale-down',
];

export const objectPosition = [
  'object-bottom',
  'object-center',
  'object-left',
  'object-left-bottom',
  'object-left-top',
  'object-right',
  'object-right-bottom',
  'object-right-top',
  'object-top',
];

export const overflow = [
  'overflow-auto',
  'overflow-hidden',
  'overflow-clip',
  'overflow-visible',
  'overflow-scroll',
  'overflow-x-auto',
  'overflow-y-auto',
  'overflow-x-hidden',
  'overflow-y-hidden',
  'overflow-x-clip',
  'overflow-y-clip',
  'overflow-x-visible',
  'overflow-y-visible',
  'overflow-x-scroll',
  'overflow-y-scroll',
];

export const opacity = [
  'opacity-0',
  'opacity-25',
  'opacity-50',
  'opacity-75',
  'opacity-100',
];

export const overscrollBehavior = [
  'overscroll-auto',
  'overscroll-contain',
  'overscroll-none',
  'overscroll-y-auto',
  'overscroll-y-contain',
  'overscroll-y-none',
  'overscroll-x-auto',
  'overscroll-x-contain',
  'overscroll-x-none',
];

export const placeContent = [
  'place-content-center',
  'place-content-start',
  'place-content-end',
  'place-content-between',
  'place-content-around',
  'place-content-evenly',
];

export const placeItems = [
  'place-items-start',
  'place-items-end',
  'place-items-center',
  'place-items-stretch',
];

export const placeSelf = [
  'place-self-auto',
  'place-self-start',
  'place-self-end',
  'place-self-center',
  'place-self-stretch',
];

export const pointerEvents = [
  'pointer-events-auto',
  'pointer-events-none',
  'pointer-events-inherit',
  'pointer-events-initial',
  'pointer-events-revert',
  'pointer-events-revert-layer',
  'pointer-events-unset',
];

export const position = [
  'static',
  'fixed',
  'absolute',
  'relative',
  'sticky',
];

export const resize = [
  'resize-none',
  'resize-y',
  'resize-x',
  'resize',
];

export const screenReaders = ['sr-only', 'not-sr-only'];

export const scrollBehavior = ['scroll-auto', 'scroll-smooth'];

export const scrollSnapAlign = [
  'snap-start',
  'snap-end',
  'snap-center',
  'snap-align-none',
];

export const scrollSnapStop = ['snap-normal', 'snap-always'];

export const scrollSnapType = [
  'snap-none',
  'snap-x',
  'snap-y',
  'snap-both',
  'snap-mandatory',
  'snap-proximity',
];

export const tableLayout = ['table-auto', 'table-fixed'];

export const textAlign = [
  'text-left',
  'text-center',
  'text-right',
  'text-justify',
  'text-start',
  'text-end',
];

export const textColor = [
  'text-transparent',
  'text-current',
  's-text',
  's-text-subtle',
  's-text-placeholder',
  's-text-inverted',
  's-text-inverted-subtle',
  's-text-link',
  's-text-disabled',
  's-text-negative',
  's-text-positive',
  's-text-notification',
];

export const textDecoration = [
  'underline',
  'line-through',
  'no-underline',
];

export const textTransform = [
  'uppercase',
  'lowercase',
  'capitalize',
  'normal-case',
];

export const textOverflow = [
  'truncate',
  'text-ellipsis',
  'text-clip',
];

export const touchAction = [
  'touch-auto',
  'touch-none',
  'touch-pan-x',
  'touch-pan-left',
  'touch-pan-right',
  'touch-pan-y',
  'touch-pan-up',
  'touch-pan-down',
  'touch-pinch-zoom',
  'touch-manipulation',
];

export const transformOrigin = [
  'origin-center',
  'origin-top',
  'origin-top-right',
  'origin-right',
  'origin-bottom-right',
  'origin-bottom',
  'origin-bottom-left',
  'origin-left',
  'origin-top-left',
];

export const transitionProperty = [
  'transition-none',
  'transition-all',
  'transition',
  'transition-colors',
  'transition-opacity',
  'transition-shadow',
  'transition-transform',
];

export const transitionTiming = [
  'ease-linear',
  'ease-in',
  'ease-out',
  'ease-in-out',
];

export const userSelect = [
  'select-none',
  'select-text',
  'select-all',
  'select-auto',
];

export const verticalAlign = [
  'align-baseline',
  'align-top',
  'align-middle',
  'align-bottom',
  'align-text-top',
  'align-text-bottom',
  'align-sub',
  'align-super',
];

export const visibility = ['visible', 'invisible'];

export const whitespace = [
  'whitespace-normal',
  'whitespace-nowrap',
  'whitespace-pre',
  'whitespace-pre-line',
  'whitespace-pre-wrap',
  'whitespace-break-spaces',
];

export const willChange = [
  'will-change-auto',
  'will-change-scroll',
  'will-change-contents',
  'will-change-transform',
];

export const wordBreak = [
  'break-normal',
  'break-words',
  'break-all',
  'break-keep',
];
