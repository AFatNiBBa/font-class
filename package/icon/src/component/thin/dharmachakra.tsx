
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dharmachakra` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dharmachakra?s=thin dharmachakra}
 * @preview ![dharmachakra](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQgMjQ4SDQ2My41OTZDNDYxLjYzNyAxOTYuNjIxIDQ0MS4xMjUgMTUwLjEwNSA0MDguNDU5IDExNC44NDJMNDM3LjAxNiA4Ni4yODFDNDQwLjE0MSA4My4xNTYgNDQwLjE0MSA3OC4wOTQgNDM3LjAxNiA3NC45NjlTNDI4LjgyOCA3MS44NDQgNDI1LjcwMyA3NC45NjlMMzk3LjE0NSAxMDMuNTI5QzM2MS44ODMgNzAuODY5IDMxNS4zNzMgNTAuMzYzIDI2NCA0OC40MDRWOEMyNjQgMy41OTQgMjYwLjQyMiAwIDI1NiAwUzI0OCAzLjU5NCAyNDggOFY0OC40MDRDMTk2LjYyNyA1MC4zNjMgMTUwLjExNyA3MC44NjkgMTE0Ljg1NSAxMDMuNTI5TDg2LjI5NyA3NC45NjlDODMuMTcyIDcxLjg0NCA3OC4xMDkgNzEuODQ0IDc0Ljk4NCA3NC45NjlTNzEuODU5IDgzLjE1NiA3NC45ODQgODYuMjgxTDEwMy41NDEgMTE0Ljg0MkM3MC44NzUgMTUwLjEwNSA1MC4zNjMgMTk2LjYyMSA0OC40MDQgMjQ4SDhDMy41NzggMjQ4IDAgMjUxLjU5NCAwIDI1NlMzLjU3OCAyNjQgOCAyNjRINDguNDA0QzUwLjM2MyAzMTUuMzc5IDcwLjg3NSAzNjEuODk1IDEwMy41NDEgMzk3LjE1OEw3NC45ODQgNDI1LjcxOUM3MS44NTkgNDI4Ljg0NCA3MS44NTkgNDMzLjkwNiA3NC45ODQgNDM3LjAzMUM3Ni41NDcgNDM4LjU5NCA3OC41OTQgNDM5LjM3NSA4MC42NDEgNDM5LjM3NVM4NC43MzQgNDM4LjU5NCA4Ni4yOTcgNDM3LjAzMUwxMTQuODU1IDQwOC40NzFDMTUwLjExNyA0NDEuMTMxIDE5Ni42MjcgNDYxLjYzNyAyNDggNDYzLjU5NlY1MDRDMjQ4IDUwOC40MDYgMjUxLjU3OCA1MTIgMjU2IDUxMlMyNjQgNTA4LjQwNiAyNjQgNTA0VjQ2My41OTZDMzE1LjM3MyA0NjEuNjM3IDM2MS44ODMgNDQxLjEzMSAzOTcuMTQ1IDQwOC40NzFMNDI1LjcwMyA0MzcuMDMxQzQyNy4yNjYgNDM4LjU5NCA0MjkuMzEzIDQzOS4zNzUgNDMxLjM1OSA0MzkuMzc1UzQzNS40NTMgNDM4LjU5NCA0MzcuMDE2IDQzNy4wMzFDNDQwLjE0MSA0MzMuOTA2IDQ0MC4xNDEgNDI4Ljg0NCA0MzcuMDE2IDQyNS43MTlMNDA4LjQ1OSAzOTcuMTU4QzQ0MS4xMjUgMzYxLjg5NSA0NjEuNjM3IDMxNS4zNzkgNDYzLjU5NiAyNjRINTA0QzUwOC40MjIgMjY0IDUxMiAyNjAuNDA2IDUxMiAyNTZTNTA4LjQyMiAyNDggNTA0IDI0OFpNMjY0IDY0LjQwNEMzMTAuODg3IDY2LjM1IDM1My40IDg1LjExMyAzODUuNzcgMTE0LjkwNkwzMDYuMzY5IDE5NC4zMTZDMjk0LjU1MSAxODQuNjUgMjgwLjAzMyAxNzguNDIyIDI2NCAxNzYuODA3VjY0LjQwNFpNMjQ4IDY0LjQwNFYxNzYuODA3QzIzMS45NjkgMTc4LjQyMiAyMTcuNDQ5IDE4NC42NSAyMDUuNjMxIDE5NC4zMTZMMTI2LjIzIDExNC45MDZDMTU4LjYgODUuMTEzIDIwMS4xMTMgNjYuMzUgMjQ4IDY0LjQwNFpNMTE0LjkxOCAxMjYuMjE5TDE5NC4zMTggMjA1LjYyOUMxODQuNjUyIDIxNy40NDcgMTc4LjQyMiAyMzEuOTY3IDE3Ni44MDcgMjQ4SDY0LjQwNEM2Ni4zNSAyMDEuMTA3IDg1LjExOSAxNTguNTkgMTE0LjkxOCAxMjYuMjE5Wk02NC40MDQgMjY0SDE3Ni44MDdDMTc4LjQyMiAyODAuMDMzIDE4NC42NTIgMjk0LjU1MyAxOTQuMzE4IDMwNi4zNzFMMTE0LjkxOCAzODUuNzgxQzg1LjExOSAzNTMuNDEgNjYuMzUgMzEwLjg5MyA2NC40MDQgMjY0Wk0yNDggNDQ3LjU5NkMyMDEuMTEzIDQ0NS42NSAxNTguNiA0MjYuODg3IDEyNi4yMyAzOTcuMDk0TDIwNS42MzEgMzE3LjY4NEMyMTcuNDQ5IDMyNy4zNSAyMzEuOTY5IDMzMy41NzggMjQ4IDMzNS4xOTNWNDQ3LjU5NlpNMjU2IDMyMEMyMjAuNzExIDMyMCAxOTIgMjkxLjI4OSAxOTIgMjU2UzIyMC43MTEgMTkyIDI1NiAxOTJDMjkxLjI5MSAxOTIgMzIwIDIyMC43MTEgMzIwIDI1NlMyOTEuMjkxIDMyMCAyNTYgMzIwWk0yNjQgNDQ3LjU5NlYzMzUuMTkzQzI4MC4wMzMgMzMzLjU3OCAyOTQuNTUxIDMyNy4zNSAzMDYuMzY5IDMxNy42ODRMMzg1Ljc3IDM5Ny4wOTRDMzUzLjQgNDI2Ljg4NyAzMTAuODg3IDQ0NS42NSAyNjQgNDQ3LjU5NlpNMzk3LjA4MiAzODUuNzgxTDMxNy42ODIgMzA2LjM3MUMzMjcuMzQ4IDI5NC41NTMgMzMzLjU3OCAyODAuMDMzIDMzNS4xOTMgMjY0SDQ0Ny41OTZDNDQ1LjY1IDMxMC44OTMgNDI2Ljg4MSAzNTMuNDEgMzk3LjA4MiAzODUuNzgxWk0zMzUuMTkzIDI0OEMzMzMuNTc4IDIzMS45NjcgMzI3LjM0OCAyMTcuNDQ3IDMxNy42ODIgMjA1LjYyOUwzOTcuMDgyIDEyNi4yMTlDNDI2Ljg4MSAxNTguNTkgNDQ1LjY1IDIwMS4xMDcgNDQ3LjU5NiAyNDhIMzM1LjE5M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Dharmachakra(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504 248H463.596C461.637 196.621 441.125 150.105 408.459 114.842L437.016 86.281C440.141 83.156 440.141 78.094 437.016 74.969S428.828 71.844 425.703 74.969L397.145 103.529C361.883 70.869 315.373 50.363 264 48.404V8C264 3.594 260.422 0 256 0S248 3.594 248 8V48.404C196.627 50.363 150.117 70.869 114.855 103.529L86.297 74.969C83.172 71.844 78.109 71.844 74.984 74.969S71.859 83.156 74.984 86.281L103.541 114.842C70.875 150.105 50.363 196.621 48.404 248H8C3.578 248 0 251.594 0 256S3.578 264 8 264H48.404C50.363 315.379 70.875 361.895 103.541 397.158L74.984 425.719C71.859 428.844 71.859 433.906 74.984 437.031C76.547 438.594 78.594 439.375 80.641 439.375S84.734 438.594 86.297 437.031L114.855 408.471C150.117 441.131 196.627 461.637 248 463.596V504C248 508.406 251.578 512 256 512S264 508.406 264 504V463.596C315.373 461.637 361.883 441.131 397.145 408.471L425.703 437.031C427.266 438.594 429.313 439.375 431.359 439.375S435.453 438.594 437.016 437.031C440.141 433.906 440.141 428.844 437.016 425.719L408.459 397.158C441.125 361.895 461.637 315.379 463.596 264H504C508.422 264 512 260.406 512 256S508.422 248 504 248ZM264 64.404C310.887 66.35 353.4 85.113 385.77 114.906L306.369 194.316C294.551 184.65 280.033 178.422 264 176.807V64.404ZM248 64.404V176.807C231.969 178.422 217.449 184.65 205.631 194.316L126.23 114.906C158.6 85.113 201.113 66.35 248 64.404ZM114.918 126.219L194.318 205.629C184.652 217.447 178.422 231.967 176.807 248H64.404C66.35 201.107 85.119 158.59 114.918 126.219ZM64.404 264H176.807C178.422 280.033 184.652 294.553 194.318 306.371L114.918 385.781C85.119 353.41 66.35 310.893 64.404 264ZM248 447.596C201.113 445.65 158.6 426.887 126.23 397.094L205.631 317.684C217.449 327.35 231.969 333.578 248 335.193V447.596ZM256 320C220.711 320 192 291.289 192 256S220.711 192 256 192C291.291 192 320 220.711 320 256S291.291 320 256 320ZM264 447.596V335.193C280.033 333.578 294.551 327.35 306.369 317.684L385.77 397.094C353.4 426.887 310.887 445.65 264 447.596ZM397.082 385.781L317.682 306.371C327.348 294.553 333.578 280.033 335.193 264H447.596C445.65 310.893 426.881 353.41 397.082 385.781ZM335.193 248C333.578 231.967 327.348 217.447 317.682 205.629L397.082 126.219C426.881 158.59 445.65 201.107 447.596 248H335.193Z" />
        </Icon>
    </>
}