
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bitcoin-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin-sign?s=sharp-duotone-solid bitcoin-sign}
 * @preview ![bitcoin-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCAwbDAgNjQgMTYgMCA0OCAwIDAtNjRMNDggMHptMCA0NDhsMCA2NCA2NCAwIDAtNjQtNDggMC0xNiAwek0xNDQgMGwwIDY0IDMyIDBjMS40IDAgMi44IDAgNC4yIC4xczIuNyAuMSA0LjEgLjJjMi43IC4yIDUuNCAuNSA4LjEgLjljNS4zIC44IDEwLjYgMS45IDE1LjYgMy41TDIwOCAwIDE0NCAwem0wIDQ0OGwwIDY0IDY0IDAgMC02NC02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMTI4bDAgOTYgMTEyIDBjMjYuNSAwIDQ4LTIxLjUgNDgtNDhzLTIxLjUtNDgtNDgtNDhMNjQgMTI4ek0wIDIyNGwwLTk2TDAgNjRsNjQgMCAxMTIgMGM2MS45IDAgMTEyIDUwLjEgMTEyIDExMmMwIDI0LjItNy43IDQ2LjYtMjAuNyA2NC45YzMxLjcgMTkuOCA1Mi43IDU1IDUyLjcgOTUuMWMwIDYxLjktNTAuMSAxMTItMTEyIDExMkw2NCA0NDggMCA0NDhsMC02NCAwLTk2IDAtNjR6bTE3NiA2NEw2NCAyODhsMCA5NiAxNDQgMGMyNi41IDAgNDgtMjEuNSA0OC00OHMtMjEuNS00OC00OC00OGwtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BitcoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M48 0l0 64 16 0 48 0 0-64L48 0zm0 448l0 64 64 0 0-64-48 0-16 0zM144 0l0 64 32 0c1.4 0 2.8 0 4.2 .1s2.7 .1 4.1 .2c2.7 .2 5.4 .5 8.1 .9c5.3 .8 10.6 1.9 15.6 3.5L208 0 144 0zm0 448l0 64 64 0 0-64-64 0z" />
            <path d="M64 128l0 96 112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L64 128zM0 224l0-96L0 64l64 0 112 0c61.9 0 112 50.1 112 112c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112L64 448 0 448l0-64 0-96 0-64zm176 64L64 288l0 96 144 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z" />
    </Icon>
);

export default BitcoinSign;