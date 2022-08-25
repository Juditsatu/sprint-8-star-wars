import { Pipe, PipeTransform } from "@angular/core";
import { Result } from "../interfaces/starship.interface";

@Pipe({
    name: 'id'
})
export class IdPipe implements PipeTransform {

    //using regex to extract only the number in the url, which contains the starship id
    transform( result: Result ): string  {
        return result.url.replace(/\D/g, '');
    }

}