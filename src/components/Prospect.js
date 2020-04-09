import React from "react";
import MaterialTable from "material-table";

export default function Prospect() {

  const [state, setState] = React.useState({
    
    columns: [
      { title: 'Statut', 
        field: 'statut',
        lookup: { 11: 'En mission', 12: 'En attente' }
      },
      { title: 'Nom et prénom', field: 'name' },
      { title: 'Titre', 
        field: 'titre',
        lookup: { 31: 'Front-end', 32: 'Full-stack', 33: 'Web designer', 34: 'Community Manager' }
      },
      { title: 'Experience', field: 'experience', /*type: 'numeric'*/ },
      { title: 'Technologies',
        field: 'technologies',
        lookup: { 71: 'JavaScript', 72: 'ReactJs', 73: 'Angular', 74:'VueJs', 75: 'PHP', 76:'Symfony', 77:'Laravel' },
      },
      { title: 'Pays',
        field: 'city',
        lookup: { 51: 'France', 52: 'Tunisie', 53: 'Maroc' }
      },
    ],

    data: [
      { statut: 11, name: 'Chemissi Ghassen', titre: 31, experience: '10 ans', technologies: 72, city: 51 },
      { statut: 12, name: 'Zerya Nicolas', titre: 32, experience: '12 ans', technologies: 73, city: 51 },
      { statut: 11, name: 'Julien Betül', titre: 33, experience: '7 ans', technologies: 76, city: 51 },
    ],
    
  });

  return (
    <MaterialTable
      title="Liste des prospects"
      columns={state.columns}
      data={state.data}
      options={{
        exportButton: true
      }}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
