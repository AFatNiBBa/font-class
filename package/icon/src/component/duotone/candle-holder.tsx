
import { Icon, generic } from "../../index";

/**
 * A component that renders the `candle-holder` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candle-holder?s=duotone candle-holder}
 * @preview ![candle-holder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4OGMwIDEzLjMgMTAuNyAyNCAyNCAyNGwzNTIgMGMzOS44IDAgNzItMzIuMiA3Mi03MnMtMzIuMi03Mi03Mi03MnMtNzIgMzIuMi03MiA3MmMwIDguNCAxLjQgMTYuNSA0LjEgMjRMMjU2IDQ2NCA2NCA0NjRsLTQwIDBjLTEzLjMgMC0yNCAxMC43LTI0IDI0ek04MCAxMTJjMCA0NC4yIDM1LjggODAgODAgODBzODAtMzUuOCA4MC04MGMwLTM5LjYtNDkuMS05MC4xLTY2LjItMTA2LjZDMTcwLjEgMS45IDE2NS4yIDAgMTYwIDBzLTEwLjEgMS45LTEzLjggNS40QzEyOS4xIDIxLjkgODAgNzIuNCA4MCAxMTJ6TTQwMCA0NDBhMjQgMjQgMCAxIDEgLTQ4IDAgMjQgMjQgMCAxIDEgNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAyMjRsMCA0OGMwIDguOCA3LjIgMTYgMTYgMTZzMTYtNy4yIDE2LTE2bDAtNDggNjQgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDIwOEw2NCA0NjRsMC0yMDhjMC0xNy43IDE0LjMtMzIgMzItMzJsMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CandleHolder: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 488c0 13.3 10.7 24 24 24l352 0c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72c0 8.4 1.4 16.5 4.1 24L256 464 64 464l-40 0c-13.3 0-24 10.7-24 24zM80 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-39.6-49.1-90.1-66.2-106.6C170.1 1.9 165.2 0 160 0s-10.1 1.9-13.8 5.4C129.1 21.9 80 72.4 80 112zM400 440a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M128 224l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 64 0c17.7 0 32 14.3 32 32l0 208L64 464l0-208c0-17.7 14.3-32 32-32l32 0z" />
    </Icon>
);

export default CandleHolder;