import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  form: FormGroup
  user !: User

  constructor(private formBuilder: FormBuilder,
            private service: UserService,
            private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      email: [null]
    })
  }

  ngOnInit(): void {

  }

  salvar() {
    
    this.user = this.form.value

    if(this.user.nome !== null){
      this.service.postUser(this.user).subscribe(l => console.log(l))
      this.openSnackBar("Registro Salvo com sucesso","Sucesso ! :)")
    }else{
      alert("Os dados do usuario não podem ser nulos")
    }

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
