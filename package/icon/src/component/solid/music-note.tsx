
import { Icon } from "../../index";

/**
 * A component that renders the `music-note` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=solid music-note}
 * @preview ![music-note](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDMyYzAtOS45LTQuNS0xOS4yLTEyLjMtMjUuMlMzNTMuOC0xLjQgMzQ0LjIgMWwtMTI4IDMyQzIwMiAzNi41IDE5MiA0OS4zIDE5MiA2NGwwIDY0IDAgMjMxLjdjLTE0LjUtNC45LTMwLjgtNy43LTQ4LTcuN2MtNjEuOSAwLTExMiAzNS44LTExMiA4MHM1MC4xIDgwIDExMiA4MHMxMTItMzUuOCAxMTItODBsMC0yNzlMMzU5LjggMTI3QzM3NCAxMjMuNSAzODQgMTEwLjcgMzg0IDk2bDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const MusicNote: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 32c0-9.9-4.5-19.2-12.3-25.2S353.8-1.4 344.2 1l-128 32C202 36.5 192 49.3 192 64l0 64 0 231.7c-14.5-4.9-30.8-7.7-48-7.7c-61.9 0-112 35.8-112 80s50.1 80 112 80s112-35.8 112-80l0-279L359.8 127C374 123.5 384 110.7 384 96l0-64z" />
    </Icon>
);

export default MusicNote;