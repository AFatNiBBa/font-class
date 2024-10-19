
import { Icon, generic } from "../../index";

/**
 * A component that renders the `skull-cow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-cow?s=sharp-duotone-solid skull-cow}
 * @preview ![skull-cow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk1LjVDMCA2MSAxOSAyNi4yIDQwIDBMNjQgMTZjLTEgMy4xLTIuMiA2LjQtMy40IDkuOUM1NC44IDQyLjIgNDcuOCA2MS43IDQ5LjQgNzcuN0M1Mi4zIDEwNi4zIDc2LjMgMTI4IDEwNSAxMjhjNy43IDAgMTUuMyAwIDIzIDBsMzIgMCAwIDk2Yy0xMC43IDAtMjEuMyAwLTMyIDBDNTcuMiAyMjQgMCAxNjYuMSAwIDk1LjV6TTQ4MCAxMjhjMTAuNyAwIDIxLjMgMCAzMiAwbDIzIDBjMjguNyAwIDUyLjctMjEuNyA1NS42LTUwLjNjMS42LTE2LTUuMy0zNS41LTExLjEtNTEuOGMtMS4yLTMuNC0yLjQtNi43LTMuNC05LjlMNjAwIDBjMjEgMjYuMiA0MCA2MSA0MCA5NS41QzY0MCAxNjYuMSA1ODIuOCAyMjQgNTEyIDIyNGwtMzIgMCAwLTk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDgwIDk2TDE2MCA5NmwwIDI3MiA2MCAwIDM2IDE0NCAxMjggMCAzNi0xNDQgNjAgMCAwLTI3MnpNMjI0IDI1NmEzMiAzMiAwIDEgMSA2NCAwIDMyIDMyIDAgMSAxIC02NCAwem0xNjAtMzJhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SkullCow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 95.5C0 61 19 26.2 40 0L64 16c-1 3.1-2.2 6.4-3.4 9.9C54.8 42.2 47.8 61.7 49.4 77.7C52.3 106.3 76.3 128 105 128c7.7 0 15.3 0 23 0l32 0 0 96c-10.7 0-21.3 0-32 0C57.2 224 0 166.1 0 95.5zM480 128c10.7 0 21.3 0 32 0l23 0c28.7 0 52.7-21.7 55.6-50.3c1.6-16-5.3-35.5-11.1-51.8c-1.2-3.4-2.4-6.7-3.4-9.9L600 0c21 26.2 40 61 40 95.5C640 166.1 582.8 224 512 224l-32 0 0-96z" />
            <path d="M480 96L160 96l0 272 60 0 36 144 128 0 36-144 60 0 0-272zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default SkullCow;