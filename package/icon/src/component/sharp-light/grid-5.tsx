
import { Icon } from "../../index";

/**
 * A component that renders the `grid-5` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-5?s=sharp-light grid-5}
 * @preview ![grid-5](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDAgNTZsMCAxNkwyNCA3MmwwLTE2IDE2IDB6TTI0IDMyTDAgMzIgMCA1NiAwIDcyIDAgOTZsMjQgMCAxNiAwIDI0IDAgMC0yNCAwLTE2IDAtMjRMNDAgMzIgMjQgMzJ6TTQwIDE1MmwwIDE2LTE2IDAgMC0xNiAxNiAwek0yNCAxMjhMMCAxMjhsMCAyNCAwIDE2IDAgMjQgMjQgMCAxNiAwIDI0IDAgMC0yNCAwLTE2IDAtMjQtMjQgMC0xNiAwem0wIDEyMGwxNiAwIDAgMTYtMTYgMCAwLTE2ek0wIDIyNGwwIDI0IDAgMTYgMCAyNCAyNCAwIDE2IDAgMjQgMCAwLTI0IDAtMTYgMC0yNC0yNCAwLTE2IDBMMCAyMjR6TTQwIDM0NGwwIDE2LTE2IDAgMC0xNiAxNiAwek0yNCAzMjBMMCAzMjBsMCAyNCAwIDE2IDAgMjQgMjQgMCAxNiAwIDI0IDAgMC0yNCAwLTE2IDAtMjQtMjQgMC0xNiAwem0wIDEyMGwxNiAwIDAgMTYtMTYgMCAwLTE2ek0wIDQxNmwwIDI0IDAgMTYgMCAyNCAyNCAwIDE2IDAgMjQgMCAwLTI0IDAtMTYgMC0yNC0yNCAwLTE2IDBMMCA0MTZ6TTEzNiA1NmwwIDE2LTE2IDAgMC0xNiAxNiAwek0xMjAgMzJMOTYgMzJsMCAyNCAwIDE2IDAgMjQgMjQgMCAxNiAwIDI0IDAgMC0yNCAwLTE2IDAtMjQtMjQgMC0xNiAwem0wIDEyMGwxNiAwIDAgMTYtMTYgMCAwLTE2ek05NiAxMjhsMCAyNCAwIDE2IDAgMjQgMjQgMCAxNiAwIDI0IDAgMC0yNCAwLTE2IDAtMjQtMjQgMC0xNiAwLTI0IDB6bTQwIDEyMGwwIDE2LTE2IDAgMC0xNiAxNiAwem0tMTYtMjRsLTI0IDAgMCAyNCAwIDE2IDAgMjQgMjQgMCAxNiAwIDI0IDAgMC0yNCAwLTE2IDAtMjQtMjQgMC0xNiAwem0wIDEyMGwxNiAwIDAgMTYtMTYgMCAwLTE2ek05NiAzMjBsMCAyNCAwIDE2IDAgMjQgMjQgMCAxNiAwIDI0IDAgMC0yNCAwLTE2IDAtMjQtMjQgMC0xNiAwLTI0IDB6bTQwIDEyMGwwIDE2LTE2IDAgMC0xNiAxNiAwem0tMTYtMjRsLTI0IDAgMCAyNCAwIDE2IDAgMjQgMjQgMCAxNiAwIDI0IDAgMC0yNCAwLTE2IDAtMjQtMjQgMC0xNiAwek0yMTYgNTZsMTYgMCAwIDE2LTE2IDAgMC0xNnpNMTkyIDMybDAgMjQgMCAxNiAwIDI0IDI0IDAgMTYgMCAyNCAwIDAtMjQgMC0xNiAwLTI0LTI0IDAtMTYgMC0yNCAwem00MCAxMjBsMCAxNi0xNiAwIDAtMTYgMTYgMHptLTE2LTI0bC0yNCAwIDAgMjQgMCAxNiAwIDI0IDI0IDAgMTYgMCAyNCAwIDAtMjQgMC0xNiAwLTI0LTI0IDAtMTYgMHptMCAxMjBsMTYgMCAwIDE2LTE2IDAgMC0xNnptLTI0LTI0bDAgMjQgMCAxNiAwIDI0IDI0IDAgMTYgMCAyNCAwIDAtMjQgMC0xNiAwLTI0LTI0IDAtMTYgMC0yNCAwem00MCAxMjBsMCAxNi0xNiAwIDAtMTYgMTYgMHptLTE2LTI0bC0yNCAwIDAgMjQgMCAxNiAwIDI0IDI0IDAgMTYgMCAyNCAwIDAtMjQgMC0xNiAwLTI0LTI0IDAtMTYgMHptMCAxMjBsMTYgMCAwIDE2LTE2IDAgMC0xNnptLTI0LTI0bDAgMjQgMCAxNiAwIDI0IDI0IDAgMTYgMCAyNCAwIDAtMjQgMC0xNiAwLTI0LTI0IDAtMTYgMC0yNCAwek0zMjggNTZsMCAxNi0xNiAwIDAtMTYgMTYgMHpNMzEyIDMybC0yNCAwIDAgMjQgMCAxNiAwIDI0IDI0IDAgMTYgMCAyNCAwIDAtMjQgMC0xNiAwLTI0LTI0IDAtMTYgMHptMCAxMjBsMTYgMCAwIDE2LTE2IDAgMC0xNnptLTI0LTI0bDAgMjQgMCAxNiAwIDI0IDI0IDAgMTYgMCAyNCAwIDAtMjQgMC0xNiAwLTI0LTI0IDAtMTYgMC0yNCAwem00MCAxMjBsMCAxNi0xNiAwIDAtMTYgMTYgMHptLTE2LTI0bC0yNCAwIDAgMjQgMCAxNiAwIDI0IDI0IDAgMTYgMCAyNCAwIDAtMjQgMC0xNiAwLTI0LTI0IDAtMTYgMHptMCAxMjBsMTYgMCAwIDE2LTE2IDAgMC0xNnptLTI0LTI0bDAgMjQgMCAxNiAwIDI0IDI0IDAgMTYgMCAyNCAwIDAtMjQgMC0xNiAwLTI0LTI0IDAtMTYgMC0yNCAwem00MCAxMjBsMCAxNi0xNiAwIDAtMTYgMTYgMHptLTE2LTI0bC0yNCAwIDAgMjQgMCAxNiAwIDI0IDI0IDAgMTYgMCAyNCAwIDAtMjQgMC0xNiAwLTI0LTI0IDAtMTYgMHpNNDA4IDU2bDE2IDAgMCAxNi0xNiAwIDAtMTZ6TTM4NCAzMmwwIDI0IDAgMTYgMCAyNCAyNCAwIDE2IDAgMjQgMCAwLTI0IDAtMTYgMC0yNC0yNCAwLTE2IDAtMjQgMHptNDAgMTIwbDAgMTYtMTYgMCAwLTE2IDE2IDB6bS0xNi0yNGwtMjQgMCAwIDI0IDAgMTYgMCAyNCAyNCAwIDE2IDAgMjQgMCAwLTI0IDAtMTYgMC0yNC0yNCAwLTE2IDB6bTAgMTIwbDE2IDAgMCAxNi0xNiAwIDAtMTZ6bS0yNC0yNGwwIDI0IDAgMTYgMCAyNCAyNCAwIDE2IDAgMjQgMCAwLTI0IDAtMTYgMC0yNC0yNCAwLTE2IDAtMjQgMHptNDAgMTIwbDAgMTYtMTYgMCAwLTE2IDE2IDB6bS0xNi0yNGwtMjQgMCAwIDI0IDAgMTYgMCAyNCAyNCAwIDE2IDAgMjQgMCAwLTI0IDAtMTYgMC0yNC0yNCAwLTE2IDB6bTAgMTIwbDE2IDAgMCAxNi0xNiAwIDAtMTZ6bS0yNC0yNGwwIDI0IDAgMTYgMCAyNCAyNCAwIDE2IDAgMjQgMCAwLTI0IDAtMTYgMC0yNC0yNCAwLTE2IDAtMjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Grid_5: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M40 56l0 16L24 72l0-16 16 0zM24 32L0 32 0 56 0 72 0 96l24 0 16 0 24 0 0-24 0-16 0-24L40 32 24 32zM40 152l0 16-16 0 0-16 16 0zM24 128L0 128l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0zm0 120l16 0 0 16-16 0 0-16zM0 224l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0L0 224zM40 344l0 16-16 0 0-16 16 0zM24 320L0 320l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0zm0 120l16 0 0 16-16 0 0-16zM0 416l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0L0 416zM136 56l0 16-16 0 0-16 16 0zM120 32L96 32l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0zm0 120l16 0 0 16-16 0 0-16zM96 128l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0-24 0zm40 120l0 16-16 0 0-16 16 0zm-16-24l-24 0 0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0zm0 120l16 0 0 16-16 0 0-16zM96 320l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0-24 0zm40 120l0 16-16 0 0-16 16 0zm-16-24l-24 0 0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0zM216 56l16 0 0 16-16 0 0-16zM192 32l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0-24 0zm40 120l0 16-16 0 0-16 16 0zm-16-24l-24 0 0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0zm0 120l16 0 0 16-16 0 0-16zm-24-24l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0-24 0zm40 120l0 16-16 0 0-16 16 0zm-16-24l-24 0 0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0zm0 120l16 0 0 16-16 0 0-16zm-24-24l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0-24 0zM328 56l0 16-16 0 0-16 16 0zM312 32l-24 0 0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0zm0 120l16 0 0 16-16 0 0-16zm-24-24l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0-24 0zm40 120l0 16-16 0 0-16 16 0zm-16-24l-24 0 0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0zm0 120l16 0 0 16-16 0 0-16zm-24-24l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0-24 0zm40 120l0 16-16 0 0-16 16 0zm-16-24l-24 0 0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0zM408 56l16 0 0 16-16 0 0-16zM384 32l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0-24 0zm40 120l0 16-16 0 0-16 16 0zm-16-24l-24 0 0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0zm0 120l16 0 0 16-16 0 0-16zm-24-24l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0-24 0zm40 120l0 16-16 0 0-16 16 0zm-16-24l-24 0 0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0zm0 120l16 0 0 16-16 0 0-16zm-24-24l0 24 0 16 0 24 24 0 16 0 24 0 0-24 0-16 0-24-24 0-16 0-24 0z" />
    </Icon>
);

export default Grid_5;