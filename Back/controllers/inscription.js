import supabase from "../supabaseconnect.js";

const inscription = async (req, res, next) => {  
    // Effectuez la requête pour récupérer tous les utilisateurs de la table "user"
    try{
        const { data, error } = await supabase
        .from('users')
        .insert({
          pseudo: 'testt',
          email: 'test2',
          password:'ok'
        })
        console.log(data)
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erreur lors de la récupération des données' });
          }
          return res.status(200).json({ message : 'Utilisateur inséré avec succés'})
          

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erreur serveur' });
      }


};
export { inscription };
