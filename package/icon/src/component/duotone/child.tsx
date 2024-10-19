
import { Icon, generic } from "../../index";

/**
 * A component that renders the `child` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child?s=duotone child}
 * @preview ![child](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA2NGE2NCA2NCAwIDEgMCAxMjggMEE2NCA2NCAwIDEgMCA5NiA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE0NCAzODRsMCA5NmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTE5Mi4yTDU5LjEgMzIxYy05LjQgMTUtMjkuMiAxOS40LTQ0LjEgMTBTLTQuNSAzMDEuOSA0LjkgMjg3bDM5LjktNjMuM0M2OS43IDE4NCAxMTMuMiAxNjAgMTYwIDE2MHM5MC4zIDI0IDExNS4yIDYzLjZMMzE1LjEgMjg3YzkuNCAxNSA0LjkgMzQuNy0xMCA0NC4xcy0zNC43IDQuOS00NC4xLTEwTDI0MCAyODcuOCAyNDAgNDgwYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtOTYtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Child: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M96 64a64 64 0 1 0 128 0A64 64 0 1 0 96 64z" />
            <path d="M144 384l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" />
    </Icon>
);

export default Child;