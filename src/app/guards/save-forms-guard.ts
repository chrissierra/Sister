import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { PasotresComponent } from '../components/ingresa/pasos/pasotres/pasotres.component';

@Injectable()
export class SaveFormsGuard implements CanDeactivate<PasotresComponent> {

  canDeactivate(component: PasotresComponent) {
			    let can = component.canDeactivate();
			    console.log('DeactivateGuard#canDeactivate called, can: ', can);
			    if (!can) {
			      alert('Deactivation blocked');
			      return false;
			    }
		}


}