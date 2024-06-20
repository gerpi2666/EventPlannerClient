import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GenericService } from 'src/app/share/generic.service';
import {
  NotificacionService,
  TipoMessage,
} from 'src/app/share/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  formulario: FormGroup;
  makeSubmit: boolean = false;
  infoUsuario: any;
  currentUser: any;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private gService: GenericService,
    private noti: NotificacionService
  ) {
    this.reactiveForm();
  }

  // Definir el formulario con sus reglas de validación
  reactiveForm() {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onReset() {
    this.formulario.reset();
  }

  submitForm() {
    this.makeSubmit = true;
    // Validación
    if (this.formulario.invalid) {
      return;
    }

    this.gService
      .create('login', { Email: 'admin1@example.com', Password: '123456' })
      .subscribe({
        next: (call) => {
          if (call.statusCode == 404) {
            this.noti.mensaje(
              'Error',
              'Credenciales incorrectas',
              TipoMessage.warning
            );
            return;
          }

          if (call.statusCode == 500) {
            this.noti.mensaje('Error', 'Error de conexion', TipoMessage.error);
            return;
          }

          if(call.statusCode==200){
          
            this.noti.mensaje(
              'Exito',
              'Credenciales Correctas',
              TipoMessage.success
            );
            return;
          }
  

          // this.dataReport = call.data;
          // this.dataService.sendFormData(this.dataReport);
          // this.router.navigate(['/report']);
        },
        error: () => {
          this.noti.mensaje('Error', 'Error de conexion', TipoMessage.error);
        },
      });

    console.log('Data login', this.formulario.value);
  }

  register() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.data = {
      IdCupon: 1,
    };
    //this.dialog.open(RegisterComponent, dialogConfig);
  }

  public errorHandling = (control: string, error: string) => {
    return (
      this.formulario.controls[control].hasError(error) &&
      this.formulario.controls[control].invalid &&
      (this.makeSubmit || this.formulario.controls[control].touched)
    );
  };
}
