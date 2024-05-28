import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-file-upload',
    standalone: true,
    imports: [MatInputModule],
    templateUrl: './file-upload.component.html',
    styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

    dropHandler(event: DragEvent) {
        console.log('Drop Event', event);

        // Prevent default behavior (Prevent file from being opened)
        event.preventDefault();

        if (event.dataTransfer?.items) {
            // event.dataTransfer.items
            // Use DataTransferItemList interface to access the file(s)
            [...event.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    console.log(`… file[${i}].name = ${file?.name}`);
                }
            });
        } else if (event.dataTransfer?.files) {
            // Use DataTransfer interface to access the file(s)
            [...event.dataTransfer.files].forEach((file, i) => {
                console.log(`file[${i}].name = ${file.name}`);
            });
        }
    }

    dragOverHandler(event: DragEvent) {
        event.preventDefault();
        // console.log('Dragover event', event);
    }
}
