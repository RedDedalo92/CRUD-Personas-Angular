import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';



const listPersonas: Persona[] = [
{ nombre: "Tomas", apellido: "Perez", correo: "tperez@gmail.com", tipoDocumento:"Carnet", documento: 12345678, fechaNacimiento: new Date()}
];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre','apellido', 'correo', 'tipoDocumento','documento', 'fechaNacimiento'];
  dataSource: MatTableDataSource<Persona>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { 
    this.dataSource = new MatTableDataSource(listPersonas);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl.itemsPerPageLabel = "Items por pagina";

    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
  }

}
